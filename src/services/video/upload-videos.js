const { Storage } = require('@google-cloud/storage');
const path = require('path');
const mu = require('multer');
const Ffmpeg = require('ffmpeg');
const { storageBucketName, keyFilename, projectId } = require('../../../config');
const { VideoModel } = require('../../models');

const extensions = ['.mp4', '.mov', '.wmv', '.flv', '.avi', '.webm', '.mkv', '.avchd'];

const gc = new Storage({
  clientOptions: {
    ...keyFilename,
  },
  credentials: {
    client_email: keyFilename.client_email,
    private_key: keyFilename.private_key,
  },
  projectId,
});

const multer = mu({
  storage: mu.memoryStorage(),
  fileFilter(req, file, callback) {
    const ext = path.extname(file.originalname);
    if (!extensions.includes(ext)) {
      callback(null, true);
      req.error = new Error('Only videos are allowed');
    }
    callback(null, true);
  },
  limits: {
    fileSize: 200 * 1024 * 1024,
  },
});

const getPublicUrl = (bucketName, fileName) => `https://storage.googleapis.com/${bucketName}/${fileName}`;

const uploadVideo = async (req, res, next) => {
  if (req.error) {
    throw new Error('error in uploading single file', req.error);
  }

  if (!req.file) {
    throw new Error('error in uploading single file', { message: 'No file uploaded.' });
  }

  const bucket = gc.bucket(storageBucketName);
  const gcsFileName = `${Date.now()}-${req.file.originalname}`;
  const file = bucket.file(gcsFileName);

  const stream = file.createWriteStream({
    resumable: false,
    gzip: true,
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on('error', (error) => {
    throw new Error('error to upload single video', { error, message: error.message });
  });

  stream.on('finish', async () => {
    req.file.cloudStorageObject = gcsFileName;

    try {
      await file.makePublic();
      req.fileUrl = getPublicUrl(storageBucketName, gcsFileName);
      await new VideoModel({ url: req.fileUrl }).save();
      next();
    } catch (error) {
      throw new Error('error to upload single video', { error, message: error.message });
    }
  });

  const process = await new Ffmpeg(req.file);
  stream.end(process);
};

const uploadVideos = async (req, res, next) => {
  if (req.error) {
    throw new Error('error in uploading multiple videos', req.error);
  }

  if (!req.files) {
    throw new Error('error in uploading multiple videos', { message: 'No video uploaded.' });
  }

  const bucket = gc.bucket(storageBucketName);
  req.filesUrls = [];

  const promises = req.files.map((video, index) => {
    const gcpName = Date.now() + video.originalname; // req.headers.decode.username +
    const file = bucket.file(gcpName);

    const promise = new Promise((resolve, reject) => {
      const stream = file.createWriteStream({
        metadata: {
          contentType: video.mimetype,
        },
      });

      stream.on('finish', async () => {
        try {
          await file.makePublic();
          req.filesUrls[index] = getPublicUrl(storageBucketName, gcpName);
          resolve();
        } catch (error) {
          reject(error);
        }
      });

      stream.on('error', (err) => {
        reject(err);
      });

      const compressedVideoPromise = new Ffmpeg(video);
      compressedVideoPromise.then((compressedVideo) => {
        stream.end(compressedVideo);
      });
    });

    return promise;
  });

  await Promise.all(promises);
  next();
};

module.exports = {
  uploadVideo,
  uploadVideos,
  multer,
};
