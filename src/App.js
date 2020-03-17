import React from 'react';
import "./App.css";
import MovieComponent from './Components/MovieComponent'
import Count from './Count'

function App() {
  return (
    <div className="App">
      <Count />
      <br />
      <hr />
      <br />
      <MovieComponent />
    </div>
  );
}

export default App;
