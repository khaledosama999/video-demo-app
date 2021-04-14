import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const VideoCard = ({
  title = 'This is a video',
  description = 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  url,
}) => {
  const strSplit = encodeURI(url).split('/');
  const videoName = strSplit[strSplit.length - 1];

  return (
    <Card style={{ maxWidth: '25rem' }}>
      <Card.Img variant="top" src="video_thumbnail.png" />
      <Card.Body className="video_card_body">
        <Card.Title className="video_card_body_title">{title}</Card.Title>
        <Card.Text className="video_card_body_description">
          {description}
        </Card.Text>
        <Link to={`/video/${videoName}`}>
          <Button className="video_card_body_btn" variant="info">Play</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default VideoCard;
