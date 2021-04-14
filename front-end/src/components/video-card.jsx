import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const VideoCard = ({ title = 'This is a video', description = 'Some quick example text to build on the card title and make up the bulk of the cards content.' }) => (
  <Card style={{ maxWidth: '25rem' }}>
    <Card.Img variant="top" src="video_thumbnail.png" />
    <Card.Body className="video_card_body">
      <Card.Title className="video_card_body_title">{title}</Card.Title>
      <Card.Text className="video_card_body_description">
        {description}
      </Card.Text>
      <Button className="video_card_body_btn" variant="info">Play</Button>
    </Card.Body>
  </Card>
);

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default VideoCard;
