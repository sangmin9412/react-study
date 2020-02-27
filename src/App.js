import React, { useState } from 'react';
import Movie from './Movie'
import Count from './Count'

function App() {

  const [movies, setMovies] = useState([
    {
      title: "타이틀 01",
      poster: "이미지 01"
    },
    {
      title: "타이틀 02",
      poster: "이미지 02"
    },
    {
      title: "타이틀 03",
      poster: "이미지 03"
    },
    {
      title: "타이틀 04",
      poster: "이미지 04"
    },
    {
      title: "타이틀 05",
      poster: "이미지 05"
    }
  ]);

  setTimeout(function(){
    setMovies([
      {
        title: "리셋 타이틀 01",
        poster: "리셋 이미지 01"
      },
      {
        title: "리셋 타이틀 02",
        poster: "리셋 이미지 02"
      },
      {
        title: "리셋 타이틀 03",
        poster: "리셋 이미지 03"
      },
      {
        title: "리셋 타이틀 04",
        poster: "리셋 이미지 04"
      },
      {
        title: "리셋 타이틀 05",
        poster: "리셋 이미지 05"
      }
    ]);
  }, 3000);

  return (
    <div className="App">
      <Count />
      <br />
      <hr />
      <br />
      {movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />
      })}
    </div>
  );
}

export default App;
