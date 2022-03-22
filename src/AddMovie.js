import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";

export const formValidationSchema = yup.object({
  poster: yup
    .string()
    .min(4, "Poster link must be minimum 4 characters long")
    .required("Poster link is required"),
  trailer: yup
    .string()
    .min(4, "Trailer link must be minimum 4 characters long")
    .required("Trailer link is required"),
  name: yup.string().required("Movie name is required"),
  rating: yup
    .number("Please enter a rating between 0 and 10")
    .min(0, "Rating must be at least 0")
    .max(10, "Rating must be at most 10")
    .required("Rating is required"),
  year: yup
    .number("Please enter a movie released year")
    .min(1950, "Year must be from 1950")
    .max(2050, "Year must be before 2050")
    .required("Movie released is required"),  
  storyline: yup
    .string()
    .min(20, "Summary must be at least 20 characters long")
    .required("Summary is required"),
  
});

export function AddMovie() {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        poster: "",
        trailer: "",
        name: "",
        rating: "",
        year: "",
        storyline: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newMovie) => {
        console.log("onSubmit", newMovie);
        fetch(`${API}/movie`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMovie),
        }).then(() => {
          history.push("/movies");
        });
      },
    });

  return (
    <section className="add-movie">
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
              helperText={
                errors.trailer && touched.trailer ? errors.trailer : ""
              }
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
                  
                //   fetch(`${API}/movie`, {
                //     method: "POST",
                //     headers: { "Content-Type": "application/json" },
                //     body: JSON.stringify(newMovie),
                //   }).then(() => {
                //     history.push("/movies");
                //   });
                // }}
                // {() => {
                //   setMoviedetails([
                //     ...movieDetails,
                //     { poster, name, rating, year, storyline },
                //   ]);
                //   setOpen(true);
                //   history.push("/movies");
                // }}
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
          </form>
      </div>
    </section>
  );
}
