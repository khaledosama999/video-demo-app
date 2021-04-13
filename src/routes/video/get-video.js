const express = require('express');
const httpStatus = require('http-status-codes');

const { getVideos, getVideo } = require('../../services/video/get-video');

const router = new express.Router();

router.get('/', async (req, res) => {
  const {
    sortBy, limit, page, order,
  } = req.query;
  const data = await getVideos(sortBy, limit, page, order);

  res.status(httpStatus.StatusCodes.OK).send(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const video = await getVideo(id);

  res.status(httpStatus.StatusCodes.OK).send(video);
});

module.exports = router;
