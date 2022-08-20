import React from 'react';
import "./App.css";

const MovieCard = ({ movie }) => {
    return (
        console.log(movie),

        <div style={{border:"solid violet" , margin:"10px"} }>
            <img src={movie.Poster} alt="image" />
            <p>Name-> {movie.Title}</p>
            <p>Released-> {movie.Year}</p>
        </div>


    )
}
export default MovieCard;