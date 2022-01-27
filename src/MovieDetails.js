import { Movies } from "./Movies";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function MovieDetails({ movieDetails, setMoviedetails }) {
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
            id={index}
            deleteButton={
              <IconButton
                aria-label="Delete Button"
                onClick={() => {
                  //Deleting the movie card using the index
                  const remainingMovies = movieDetails.filter((mv, idx) => {
                    const removeIdx = index;
                    return idx !== removeIdx;
                  });
                  setMoviedetails(remainingMovies);
                }}
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
