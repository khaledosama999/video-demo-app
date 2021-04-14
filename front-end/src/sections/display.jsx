import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardColumns } from 'react-bootstrap';
import VideoCard from '../components/video-card';

const DisplayVideo = () => {
  const [videos, setVideos] = useState([]);

  const getVideosService = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}videos?limit=1000`);

    setVideos(response.data.videos);
  };

  useEffect(() => {
    getVideosService();
  }, []);

  const cards = videos
    .map(({ title, url, description }) => (
      <VideoCard
        title={title}
        url={url}
        description={description}
      />
    ));

  return (
    <CardColumns style={{ marginTop: '2rem' }}>
      {cards}
    </CardColumns>
  );
};

export default DisplayVideo;
