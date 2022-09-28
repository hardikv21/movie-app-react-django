import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Movie.css';

const MovieDisplay = ({ props }) => (
    <Card>
        <Card.Img variant="top" src={props.movie.Poster} alt="N/A" />
        <Card.Body>
            <Card.Title>{props.movie.Title}</Card.Title>
            <Card.Text>{props.movie.Year}</Card.Text>
            <Button variant="primary" size='sm'>Go somewhere</Button>
        </Card.Body>
    </Card>
);

export default MovieDisplay;
