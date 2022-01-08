import { useState } from "react";
import "./App.css";
import { Button, TextField, Snackbar, Rating, Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 77, 7)",
    },
    secondary: {
      main: "rgba(255, 255, 255, .2);",
    },
  },
});
export default function App() {
  const initial_movies = [
    {
      poster:
        "https://igimages.gumlet.io/tamil/home/kamal-vikrammovie-glimpseposter.jpg?w=376&dpr=2.6",
      name: "Vikram",
      rating: "NA",
      year: "2022",
      storyline:
        "Vikram is an upcoming Indian Tamil-language action thriller film starring Kamal Hassan, written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films.",
    },
    {
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg",
      name: "Dune",
      rating: "8.2",
      year: "2021",
      storyline:
        "Dune is a 2021 American epic science fiction film directed by Denis Villeneuve and written by Villeneuve, Jon Spaihts & Eric Roth. It is the adaptation of the 1965 novel by Frank Herbert.",
    },
    {
      poster:
        "https://themoviespoiler.com/wp-content/uploads/2020/04/half_of_it_xlg.jpg",
      name: "The Half of It",
      rating: "6.9",
      year: "2020",
      storyline:
        "A shy, straight-A Chinese-American student helps the school jock woo a girl whom, secretly, they both desire. They find themselves connecting and learn about the nature of love.",
    },
    {
      poster:
        "https://64.media.tumblr.com/75090c6af22c4e145e11888e11023cae/tumblr_pn73yqm1rt1sa50hio1_1280.jpg",
      name: "Tomb Raider",
      rating: "6.3",
      year: "2018",
      storyline:
        "Lara Croft, a courageous and independent young woman, sets out on a dangerous journey to unravel the truth behind her adventurer father's mysterious disappearance.",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ5NzgwMzExNF5BMl5BanBnXkFtZTgwNjk2NTYyNTM@._V1_FMjpg_UX1000_.jpg",
      name: "Meri Pyaari Bindu",
      rating: "6",
      year: "2017",
      storyline:
        "Childhood friends Abhimanyu and Bindu face friction when she realises that she does not love him after a brief relationship. After getting famous, Abhimanyu decides to pen a story based on his life.",
    },
    {
      poster:
        "https://moviegalleri.net/wp-content/gallery/iraivi-movie-release-posters/iraivi_movie_release_posters_8348a49.jpg",
      name: "Iraivi",
      rating: "8",
      year: "2016",
      storyline:
        "Three men, who are financially struggling, get involved in criminal activities to improve their financial status. They end up in prison and their wives are forced to lead an independent life.",
    },
    {
      poster:
        "https://filmbiopsy.com/wp-content/uploads/2020/03/CXTfbv6WMAAyApR-1.jpg",
      name: "Charlie",
      rating: "8",
      year: "2015",
      storyline:
        "Tessa runs away from home to avoid getting married and rents a room. She finds a sketchbook of the previous occupant, which reveals an incomplete story, and decides to find the artist.",
    },
    {
      poster: "https://im.rediff.com/movies/2015/jul/31orange-mittai.jpg",
      name: "Orange Mittai",
      rating: "6.5",
      year: "2015",
      storyline:
        "Kailasam, a 55-year-old man who suffers from a heart condition, befriends Sathya and they embark on a journey to discover each other's deepest fears.",
    },
    {
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRpOixn4X7IZwygj1typtUADTkZrBIzH0uUBM-wes9_chod77gb5YWizqFRYLqzdV-wA&usqp=CAU",
      name: "The Croods",
      rating: "7.2",
      year: "2013",
      storyline:
        "Two very different families join forces to create a new community: a cave person co-op on the most amazing farm in the history of prehistory.",
    },
  ];

  const [poster, setPoster] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [storyline, setStoryline] = useState("");
  const [movieDetails, setMovieDetails] = useState(initial_movies);
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <section>
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
            </div>
            <div className="add-button">
              <Button
                variant="outlined"
                onClick={() =>
                  {setMovieDetails([
                    ...movieDetails,
                    { poster, name, rating, year, storyline },
                  ]);
                  setOpen(true);}
                }
                
              >
                Add Movie
              </Button>
              <Snackbar
                anchorOrigin={{ vertical:"top", horizontal:"center" }}
                open={open}
                autoHideDuration={1000}
                message="Movie Added Successfully"
                onClose={() => setOpen(false)}
              />
            </div>
          </div>
          {movieDetails.map((details) => (
            <Movies
              key={details.name}
              poster={details.poster}
              name={details.name}
              rating={details.rating}
              year={details.year}
              storyline={details.storyline}
            />
          ))}
        </section>
      </div>
    </ThemeProvider>
  );
}

function Movies({ poster, name, rating, year, storyline }) {
  const [toggle, setToggle] = useState(true);
  const styles = toggle ? { display: "block" } : { display: "none" };
  return (
    <div className="movie-card">
      <img src={poster} alt={name} />
      <h4 className="title">{name}</h4>
      <div className="movie-card-specs">
        <p><Tooltip title={rating} arrow>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.1} max={10} size="small" />
        </Tooltip></p>
        <p>Year of Release: {year}</p>
        <Button size="small" onClick={() => setToggle(!toggle)}>Toggle Description</Button>
        <p style={styles} className="summary">
          Storyline: {storyline}
        </p>
      </div>
    </div>
  );
}
