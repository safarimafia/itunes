import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//list of favorite items
const FavoritesList = ({ favorites, onRemoveFavorite }) => {
  console.log("Rendering FavoritesList with favorites:", favorites);

  return (
    <Container>
      <Row>
        {favorites.length > 0 ? (
          favorites.map(favorite => (
            <Col md={4} key={favorite.trackId || favorite.collectionId} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{favorite.trackName || favorite.collectionName}</Card.Title>
                  <Button variant="outline-danger" onClick={() => onRemoveFavorite(favorite)}>
                    <FontAwesomeIcon icon={faStar} /> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </Row>
    </Container>
  );
};

export default FavoritesList;
