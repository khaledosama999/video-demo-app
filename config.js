module.exports = {
  port: 3000,
  storageBucketName: process.env.STORAGE_BUCKET_NAME,
  keyFilename: process.env.KEY_FILE_NAME,
  projectId: process.env.PROJECT_ID,
  DBAuth: process.env.DB_AUTH,
  DBUrl: process.env.DB_URI,
};
