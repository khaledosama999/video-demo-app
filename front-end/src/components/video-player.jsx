import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const { name } = useParams();
  console.log({ name });
  const baseUrl = 'https://storage.googleapis.com/upload-videos-test/';

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        controls
        url={`${baseUrl}${name}`}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
