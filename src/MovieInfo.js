import { useEffect,  useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieInfo() {

  const history = useHistory();
  
  const { id } = useParams();
  const [movieDetails, setMoviedetails] = useState([]);

  useEffect(() => {
    fetch("https://6197229daf46280017e7e453.mockapi.io/movie/" + id, {method:"GET"})
    .then(data => data.json())
    .then(movie => setMoviedetails(movie))
  }, [id]);

  return (
    <section className="movie-info">
      <div>

        <iframe
          width="100%"
          height="480"
          src={movieDetails.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="movie-info-container">
          <div className="movie-specs">
            <h2>{movieDetails.name}</h2>
            <h4> ⭐ {movieDetails.rating}</h4>
          </div>
          <p> {movieDetails.storyline}</p>
        </div>

        <Button onClick={() => history.goBack()} variant="outlined" startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>
        
      </div>
    </section>
  );
}
