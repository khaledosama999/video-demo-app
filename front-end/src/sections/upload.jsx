import React from 'react';
import { Form, Button } from 'react-bootstrap';

const UploadSection = () => (
  <Form style={{ margin: '2vh' }}>
    <Form.Group controlId="form-group-title">
      <Form.Label>Video Title</Form.Label>
      <Form.Control type="text" placeholder="Video title" maxLength="100" required />
      <Form.Text className="text-muted">
        The title to be displayed for the uploaded video
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="form-group-description">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Description" maxLength="1024" required />
      <Form.Text className="text-muted">
        A brief video description
      </Form.Text>
    </Form.Group>
    <Form.Group controlId="form-group-video">
      <Form.Label>Video</Form.Label>
      <Form.File
        id="video"
        label="Video"
        accept="video/mp4,video/x-m4v,video/*"
        custom
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

export default UploadSection;
