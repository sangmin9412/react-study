import React from 'react';
import "./Movie.css";

function Movie(props) {
    return (
        <div className="movie-item" key={props.index}>
            <div className="movie-item-inner">
                <MoviePoster poster={props.poster} />
                <div className="movie-item-info">
                    <p className="movie-item-tit">{props.title}</p>
                    <p className="movie-item-genres">{props.genres}</p>
                    <p className="movie-item-synopsis">{props.synopsis}</p>
                </div>
                <div className="movie-item-likes">likes...</div>
            </div>
        </div>
    )
}

function MoviePoster(props) {
    return (
        <div className="img"><img src={props.poster} /></div>
    )
}

export default Movie;