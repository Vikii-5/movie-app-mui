import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { TextField, Snackbar } from "@mui/material";

export function EditMovies({ movieDetails, setMoviedetails }) {

  //Getting the id details from the url using useParams hook
  const { id } = useParams();
  const movies = movieDetails[id];

  const history = useHistory();

  const [poster, setPoster] = useState(movies.poster);
  const [name, setName] = useState(movies.name);
  const [rating, setRating] = useState(movies.rating);
  const [year, setYear] = useState(movies.year);
  const [storyline, setStoryline] = useState(movies.storyline);
  const [trailer, setTrailer] = useState(movies.trailer);
  
  //Snackbar initial state
  const [open, setOpen] = useState(false);

  return (
    <section className="edit-movie">
      <div className="input-container">
        <div className="movie-inputs">
          <TextField
            id="outlined-basic"
            label="Paste Movie Poster Link"
            variant="outlined"
            size="small"
            type="url"
            defaultValue={poster}
            onChange={(event) => setPoster(event.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Paste Movie Trailer Link"
            variant="outlined"
            size="small"
            type="url"
            value={trailer}
            onChange={(event) => setTrailer(event.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Enter a Movie Name"
            variant="outlined"
            size="small"
            type="text"
            defaultValue={name}
            onChange={(event) => setName(event.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Enter a Movie Rating"
            variant="outlined"
            size="small"
            type="number"
            defaultValue={rating}
            onChange={(event) => setRating(event.target.value)}
            min="1"
            max="10"
          />

          <TextField
            id="outlined-basic"
            label="Enter a Movie Year"
            variant="outlined"
            size="small"
            type="text"
            defaultValue={year}
            onChange={(event) => setYear(event.target.value)}
            min="1950"
            max="2030"
          />

          <TextField
            id="outlined-basic"
            label="Enter a Movie Storyline"
            variant="outlined"
            size="small"
            type="text"
            defaultValue={storyline}
            onChange={(event) => setStoryline(event.target.value)}
            maxLength="150"
          />

          <div className="add-button">
            <Button
              variant="outlined"
              onClick={() => {
                //Updating the movie details to the movieDetails array
                const updatedMovie = { poster, name, rating, year, storyline };
                const updatedMovieDetails = [...movieDetails];
                updatedMovieDetails[id] = updatedMovie;
                setMoviedetails(updatedMovieDetails);
                setOpen(true);
                history.push("/movies");
              }}
            >
              Update Movie
            </Button>

            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              autoHideDuration={1000}
              message="Movie Updated Successfully"
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
