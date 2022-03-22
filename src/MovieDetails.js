import { useState, useEffect } from "react";
import { Movies } from "./Movies";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./global";

export function MovieDetails() {

  const [movieDetails, setMoviedetails] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movie`, {method:"GET"})
    .then(data => data.json())
    .then(movie => setMoviedetails(movie))
  }

  useEffect(getMovies, []);

  const deleteMovie = (id) => {
    fetch(`${API}/movie` + id, {method:"DELETE"})
    .then(data => data.json())
    .then(() => getMovies())
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
