import React, { useState, useEffect, useRef } from 'react';
import Movie from './Movie'

function MovieComponent() {
    const [movies, setMovies] = useState([])
    const [loadMovies, setLoadMovies] = useState(false)
    const [pageCount, setPageCount] = useState(2);
    const moviesLoading = useRef(false);

    useEffect(() => {
      _loadMovies()
    }, []);

    useEffect(() => {
        if (loadMovies) {
          document.body.classList.add('onloaded')
        }
    }, [loadMovies]);

    useEffect(() => {
      async function onScroll() {
        let scrollY = window.pageYOffset;
        let windowHeight = document.documentElement.offsetHeight;
        let documentHeight = document.documentElement.clientHeight;
        if (scrollY + documentHeight > windowHeight - 800) {
          if (!moviesLoading.current) {
            console.log('moviessss');
            moviesLoading.current = true;
            const movie = await _callApi(20, pageCount)
            setMovies((prev) => {
              return [
                ...prev,
                ...movie,
              ]
            });
            console.log(movies);

            setTimeout(() => {
              moviesLoading.current = false;
              setPageCount((prev) => prev + 1);
            }, 1500);
          }
        }
      }
      document.addEventListener('scroll', onScroll);
      return () => {
        document.removeEventListener('scroll', onScroll);
      }
    }, [movies, moviesLoading, pageCount]);

    const _loadMovies = async () => {
        const movies = await _callApi(20, 1)
        setMovies(movies)
        setLoadMovies(true);

        console.log(movies)
    }

    const _callApi = (limit, page) => {
        return (
            fetch(`https://yts.mx/api/v2/list_movies.json?sort_by=like_count&limit=${limit}&page=${page}`)
            .then((response) => {return response.json()})
            .then((json) => {return json.data.movies})
            .catch((err) => {console.log(err)})
        )
    }

    const _renderMovies = () => {
        return (
            movies.map((movie, index) => {
              return (
                <Movie 
                  title={movie.title}  
                  poster={movie.medium_cover_image} 
                  key={index} 
                  genres={movie.genres}
                  synopsis={movie.synopsis}
                />
              )
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