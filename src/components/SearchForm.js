import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SearchForm = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [media, setMedia] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ term, media });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="p-4 border rounded">
            <Form.Group controlId="formSearchTerm">
              <Form.Label>Search Term</Form.Label>
              <Form.Control 
                type="text" 
                value={term} 
                onChange={(e) => setTerm(e.target.value)} 
                placeholder="Enter search term"
                required 
              />
            </Form.Group>
            <Form.Group controlId="formMediaType">
              <Form.Label>Media Type</Form.Label>
              <Form.Control 
                as="select" 
                value={media} 
                onChange={(e) => setMedia(e.target.value)}
              >
                <option value="all">All</option>
                <option value="movie">Movie</option>
                <option value="podcast">Podcast</option>
                <option value="music">Music</option>
                <option value="audiobook">Audiobook</option>
                <option value="shortFilm">Short Film</option>
                <option value="tvShow">TV Show</option>
                <option value="software">Software</option>
                <option value="ebook">eBook</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" block="true">Search</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForm;
