const { VideoModel } = require('../../models');

const getVideos = async (args = {}) => {
  const {
    sortBy = 'createdAt', limit = 10, page = 1, order = 1,
  } = args;
  const counts = await VideoModel.countDocuments({ isDeleted: false });
  const videos = await VideoModel.find({ isDeleted: false })
    .sort({ [sortBy]: order })
    .skip((+page * +limit) - +limit)
    .limit(+limit);

  return {
    videos,
    counts,
  };
};

const getVideo = async (id) => VideoModel.findOne({ isDeleted: false, _id: id });

module.exports = {
  getVideos,
  getVideo,
};
