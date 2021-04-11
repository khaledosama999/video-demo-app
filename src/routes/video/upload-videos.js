const express = require('express');
const HttpStatus = require('http-status-codes');
const { uploadVideoService: { uploadVideo, uploadVideos, multer } } = require('../../services/video');

const router = new express.Router();

router.post('/single', multer.single('video'), uploadVideo, async (req, res) => {
  if (req.fileUrl) {
    return res.status(HttpStatus.StatusCodes.CREATED).send({ url: req.fileUrl });
  }

  return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Unable to upload' });
});

router.post('/multi', multer.any(), uploadVideos, async (req, res) => {
  if (req.filesUrls) {
    return res.status(HttpStatus.StatusCodes.CREATED).send({ urls: req.filesUrls });
  }

  return res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Unable to upload' });
});

module.exports = router;
