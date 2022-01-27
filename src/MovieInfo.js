import { useParams } from "react-router-dom";

export function MovieInfo({ movieDetails }) {
  const { id } = useParams();
  const movies = movieDetails[id];

  return (
    <section className="movie-info">
      <div>

        <iframe
          width="100%"
          height="480"
          src={movies.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="movie-info-container">
          <div className="movie-specs">
            <h2>{movies.name}</h2>
            <h4> ⭐ {movies.rating}</h4>
          </div>
          <p> {movies.storyline}</p>
        </div>
        
      </div>
    </section>
  );
}
