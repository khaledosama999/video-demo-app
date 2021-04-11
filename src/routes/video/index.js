const uploadVideoRoutes = require('./upload-videos');

const defineVideosRoutes = (router) => {
  router.use('/videos', uploadVideoRoutes);
};

module.exports = defineVideosRoutes;
