import React from 'react';
import "./Movie.css";

function Movie(props) {
    return (
        <div>
            <MoviePoster poster={props.poster} />
            <p className="tit">{props.title}</p>
        </div>
    );
};

function MoviePoster(props) {
    return (
        <div className="img">{props.poster}</div>
    )
}

export default Movie;