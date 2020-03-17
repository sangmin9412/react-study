import React, { useState, useEffect } from 'react';
import Movie from './Movie'

function MovieComponent() {
    useEffect(() => {
        // setTimeout(function(){
        //   setMovies(setData);
        // }, 3000);
        _getMovies()
    }, [])
    const [movies, setMovies] = useState([])

    const _getMovies = async () => {
        const movies = await _callApi()
        setMovies(movies)

        console.log(movies)
    }

    const _callApi = () => {
        return (
            fetch('https://yts.mx/api/v2/list_movies.json?sort_by=like_count')
            .then((response) => {return response.json()})
            .then((json) => {return json.data.movies})
            .catch((err) => {console.log(err)})
        )
    }

    const _renderMovies = () => {
        return (
            movies.map((movie, index) => {
            return <Movie 
            title={movie.title}  
            poster={movie.medium_cover_image} 
            key={index} 
            genres={movie.genres}
            synopsis={movie.synopsis}
            />
            })
        )
    }
    
    return (
        <div className="movie-list">
            <div className="movie-list-inner">
                {movies ? _renderMovies() : "Loading..."}
            </div>
        </div>
    )
}

export default MovieComponent;