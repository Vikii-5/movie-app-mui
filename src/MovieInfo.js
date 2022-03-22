import { useEffect,  useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { API } from "./global";

export function MovieInfo() {

  const history = useHistory();
  
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = () => {
    fetch(`${API}/movie` + id, {method:"GET"})
    .then(data => data.json())
    .then(movie => setMovie(movie))
  }

  useEffect(getMovie, []);

  return (
    <section className="movie-info">
      <div>

        <iframe
          width="100%"
          height="480"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="movie-info-container">
          <div className="movie-specs">
            <h2>{movie.name}</h2>
            <h4> ⭐ {movie.rating}</h4>
          </div>
          <p> {movie.storyline}</p>
        </div>

        <Button onClick={() => history.goBack()} variant="outlined" startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>
        
      </div>
    </section>
  );
}
