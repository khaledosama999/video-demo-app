import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UploadSection = () => {
  const [fileTitle, setFileTitle] = useState('');
  const [fileDescription, setFileDescription] = useState('');
  const [file, setFile] = useState();

  const uploadService = async () => {
    const fromData = new FormData();

    fromData.append('video', file);
    fromData.append('title', fileTitle);
    fromData.append('description', fileDescription);

    return axios.post(`${process.env.REACT_APP_API_BASE_URL}videos/single`, fromData);
  };

  return (
    <Form
      style={{ margin: '2vh' }}
      onSubmit={(e) => {
        e.preventDefault();

        uploadService()
          .then(() => {
            setFileTitle('');
            setFileDescription('');
            setFile(undefined);
          });
      }}
    >
      <Form.Group controlId="form-group-title">
        <Form.Label>Video Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Video title"
          maxLength="100"
          value={fileTitle}
          onChange={(e) => { setFileTitle(e.target.value); }}
          required
        />
        <Form.Text className="text-muted">
          The title to be displayed for the uploaded video
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="form-group-description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          maxLength="1024"
          value={fileDescription}
          onChange={(e) => { setFileDescription(e.target.value); }}
          required
        />
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
          onChange={(e) => { setFile(e.target.files[0]); }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UploadSection;
