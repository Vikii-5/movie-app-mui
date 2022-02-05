import { useState, useEffect } from "react";
import { Movies } from "./Movies";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function MovieDetails() {

  const [movieDetails, setMoviedetails] = useState([]);

  const getMovie = () => {
    fetch("https://6197229daf46280017e7e453.mockapi.io/movie", {method:"GET"})
    .then(data => data.json())
    .then(movie => setMoviedetails(movie))
  }

  useEffect(getMovie, []);

  const deleteMovie = (id) => {
    fetch("https://6197229daf46280017e7e453.mockapi.io/movie/" + id, {method:"DELETE"})
    .then(data => data.json())
    .then(() => getMovie())
  }

  return (
    <section className="movie-details">
      <div className="movie-container">
        {movieDetails.map((details, index) => (
          <Movies
            key={details.name}
            poster={details.poster}
            name={details.name}
            rating={details.rating}
            year={details.year}
            storyline={details.storyline}
            trailer={details.trailer}
            id={details.id}
            deleteButton={
              <IconButton
                aria-label="Delete Button"
                onClick={() => deleteMovie(details.id)}
                // {() => {
                //   //Deleting the movie card using the index
                //   const remainingMovies = movieDetails.filter((mv, idx) => {
                //     const removeIdx = index;
                //     return idx !== removeIdx;
                //   });
                //   setMoviedetails(remainingMovies);
                // }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            }
          />
        ))}
      </div>
    </section>
  );
}
