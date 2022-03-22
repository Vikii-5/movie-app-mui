import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { TextField, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import { formValidationSchema } from "./AddMovie";
import { API } from "./global";

export function EditMovies() {
  //Getting the id details from the url using useParams hook
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = () => {
    fetch(`${API}/movie` + id, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mov) => setMovie(mov));
  };

  useEffect(getMovie, []);

  return movie ? <EditMovieForm movie={movie} /> : "";
}

function EditMovieForm({ movie }) {
  const history = useHistory();

  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: movie,
      validationSchema: formValidationSchema,
      onSubmit: (updatedMovie) => {
        console.log("onSubmit", updatedMovie);
        fetch(`${API}/movie/` + movie.id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedMovie),
        }).then(() => {
          history.push("/movies");
        });
      },
    });

  //Snackbar initial state
  const [open, setOpen] = useState(false);

  return (
    <section className="edit-movie">
      <div className="input-container">
        <form onSubmit={handleSubmit} className="movie-inputs">
          <TextField
            id="poster"
            name="poster"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.poster}
            label="Paste Poster Link"
            variant="outlined"
            error={errors.poster && touched.poster}
            helperText={errors.poster && touched.poster ? errors.poster : ""}
          />

          <TextField
            id="trailer"
            name="trailer"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.trailer}
            label="Movie Trailer"
            variant="outlined"
            error={errors.trailer && touched.trailer}
            helperText={errors.trailer && touched.trailer ? errors.trailer : ""}
            poster
          />

          <TextField
            id="name"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            label="Movie Name"
            variant="outlined"
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : ""}
          />

          <TextField
            id="rating"
            name="rating"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.rating}
            label="Movie Rating"
            variant="outlined"
            error={errors.rating && touched.rating}
            helperText={errors.rating && touched.rating ? errors.rating : ""}
          />

          <TextField
            id="year"
            name="year"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.year}
            label="Movie Released Year"
            variant="outlined"
            error={errors.year && touched.year}
            helperText={errors.year && touched.year ? errors.year : ""}
          />

          <TextField
            id="storyline"
            name="storyline"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.storyline}
            label="Movie storyline"
            variant="outlined"
            error={errors.storyline && touched.storyline}
            helperText={
              errors.storyline && touched.storyline ? errors.storyline : ""
            }
          />

          <div className="add-button">
            <Button
              variant="outlined"
              type="submit"
              // onClick={() => {
              //   const updatedMovie = { poster, name, rating, year, storyline, trailer };
              //   fetch(`${API}/movie` + movie.id, {
              //   method: "PUT",
              //   headers: {"Content-Type": "application/json"},
              //   body: JSON.stringify(updatedMovie)
              //   })
              //   .then(() => {history.push("/movies")})
              // }}
              // {() => {
              //   //Updating the movie details to the movieDetails array
              //   const updatedMovie = { poster, name, rating, year, storyline };
              //   const updatedMovieDetails = [...movieDetails];
              //   updatedMovieDetails[id] = updatedMovie;
              //   setMoviedetails(updatedMovieDetails);
              //   setOpen(true);
              //   history.push("/movies");
              // }}
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
        </form>
      </div>
    </section>
  );
}
