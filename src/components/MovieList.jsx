import React from 'react';

const MovieList = ({movie, selectMovie}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <div onClick={() => selectMovie(movie)} className={"movie"}>
            <div className="movie-title">
                {movie.poster_path &&
                <img src={IMAGE_PATH + movie.poster_path} alt={movie.title}/>
                }
                <div className={"flex between movie-infos"}>
                    <h5 className={"movie-title"}>{movie.title}</h5>
                    
                </div>
            </div>
        </div>
        ljlkjlkj
    );
};


export default MovieList;