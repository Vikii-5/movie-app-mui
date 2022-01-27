import { useState } from "react";
import { Button, TextField, Snackbar } from "@mui/material";

export function AddMovie({ movieDetails, setMoviedetails }) {
  
  const [poster, setPoster] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [storyline, setStoryline] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <section className="add-movie">
      <div className="input-container">
        <div className="movie-inputs">
          <TextField
            id="outlined-basic"
            label="Paste Movie Poster Link"
            variant="outlined"
            size="small"
            type="url"
            value={poster}
            onChange={(event) => setPoster(event.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Enter a Movie Name"
            variant="outlined"
            size="small"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Enter a Movie Rating"
            variant="outlined"
            size="small"
            type="number"
            value={rating}
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
            value={year}
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
            value={storyline}
            onChange={(event) => setStoryline(event.target.value)}
            maxLength="150"
          />

          <div className="add-button">
            <Button
              variant="outlined"
              onClick={() => {
                setMoviedetails([
                  ...movieDetails,
                  { poster, name, rating, year, storyline },
                ]);
                setOpen(true);
              }}
            >
              Add Movie
            </Button>

            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              autoHideDuration={1000}
              message="Movie Added Successfully"
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
