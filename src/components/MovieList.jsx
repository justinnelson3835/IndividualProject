import React from 'react';
import { Card, CardBody, CardImg } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const MovieList = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <Card onClick={() => selectMovie(movie)}>
            
            <CardImg src={movie.poster_path ? IMAGE_PATH + movie.poster_path : ''} alt={movie.title} />
               
                <CardBody>

                    <Card.Title>{movie.title}</Card.Title>
                    
                </CardBody>
            
        </Card>
        
    );
};


export default MovieList;