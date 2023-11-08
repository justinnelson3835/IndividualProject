import React from 'react';
import { Card, CardBody } from 'react-bootstrap';


const MovieList = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <Card onClick={() => selectMovie(movie)}>
            
            <Card.Img src={movie.poster_path ? IMAGE_PATH + movie.poster_path : ''} alt={movie.title} />
               
                <Card.Body>

                    <Card.Title>{movie.title}</Card.Title>
                    
                </Card.Body>
            
        </Card>
        
    );
};


export default MovieList;