import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SearchResults = ({ results, onFavorite }) => {
  return (
    <Container>
      <Row>
        {results.map(result => (
          <Col md={4} key={result.trackId || result.collectionId} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{result.trackName || result.collectionName}</Card.Title>
                <Button variant="outline-primary" onClick={() => onFavorite(result)}>
                  <FontAwesomeIcon icon={faStar} /> Add to Favorites
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
