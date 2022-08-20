import React, { useState, useEffect } from "react";
import MovieCard from "MovieCard";
import "./App.css";
// Go to this website http://www.omdbapi.com
// And create your own key
// mykey = 7e26e7d6;
const url = "http://www.omdbapi.com?apikey=7e26e7d6";

const App = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);


  useEffect(() => {

    searchMovie("Hero");
  }, [])

  const searchMovie = async (title) => {
    const res = await fetch(`${url}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search)

  };

  return (
    // inline
    // <div style={{
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center'}}>

    <div className="modify">
      <h1>Search Your Movie Name</h1>
      <div>
        <input type="text" name="" id="" value={searchTerm} placeholder="Search Here" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <button type="submit" onClick={() => searchMovie(searchTerm)}>Search</button>
      </div>
      <div>
   
        {movies.map((movie) => (
          console.log(movie),
          <MovieCard movie={movie} />
        ))}
         

      </div>
    </div>
  );
};

export default App;
