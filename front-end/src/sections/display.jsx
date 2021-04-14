import React from 'react';
import { CardColumns } from 'react-bootstrap';
import VideoCard from '../components/video-card';

const DisplayVideo = () => (
  <CardColumns style={{ marginTop: '2rem' }}>
    <VideoCard />
    <VideoCard />
    <VideoCard />
    <VideoCard />
    <VideoCard />
  </CardColumns>
);

export default DisplayVideo;
