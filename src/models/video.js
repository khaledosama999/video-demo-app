const mongoose = require('mongoose');

// eslint-disable-next-line max-len
const urlPattern = /^((https?:\/\/)?(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const videoSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    validate: {
      validator(url) {
        return urlPattern.test(url);
      },
      message: 'value not valid url',
    },
  },

  description: {
    type: String,
    trim: true,
    minLength: 1,
  },

  title: {
    type: String,
    minLength: 1,
  },

  isDeleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('video', videoSchema);
