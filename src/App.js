import React, { useState, useEffect } from 'react';
import "./App.css";
import Movie from './Movie'
import Count from './Count'

function App() {
  useEffect(() => {
    // setTimeout(function(){
    //   setMovies(setData);
    // }, 3000);
    _getMovies()
  }, [])
  const [movies, setMovies] = useState([])

  const _getMovies = async () => {
    const movies = await _callApi()
    console.log(movies)
    setMovies(movies)
    document.body.classList.add('onloaded')
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
        poster={movie.large_cover_image} 
        key={index} 
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
      })
    )
  }
  
  // const clickHandler = () => {
  //   setMovies([
  //     {
  //       title: '추가 타이틀 01',
  //       poster: '추가 이미지 01'
  //     },
  //     ...movies
  //   ])
  // }

  return (
    <div className="App">
      <Count />
      <br />
      <hr />
      <br />
      <div className="movie-list">
        <div className="movie-list-inner">
          {movies.length > 0 ? _renderMovies() : "Loading..."}
        </div>
      </div>
      {/* <button className="movieBtn" onClick={clickHandler} style={{position:"fixed", top:"100px", right:"100px"}}>Movie Click!!</button> */}
    </div>
  );
}

export default App;
