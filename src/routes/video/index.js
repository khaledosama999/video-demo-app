const uploadVideoRoutes = require('./upload-videos');
const getVideosRoutes = require('./get-video');

const defineVideosRoutes = (router) => {
  router.use('/videos', uploadVideoRoutes);
  router.use('/videos', getVideosRoutes);
};

module.exports = defineVideosRoutes;
