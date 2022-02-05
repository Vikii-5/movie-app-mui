import { useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Switch, Route } from "react-router-dom";
import { Button } from "@mui/material";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";
import { EditMovies } from "./EditMovies";
import { Home } from "./Home";
import { MovieInfo } from "./MovieInfo";
import { NotFound } from "./NotFound";
import { Paper, AppBar, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function App() {
  // const initial_movies = [
  //   {
  //     poster:
  //       "https://igimages.gumlet.io/tamil/home/kamal-vikrammovie-glimpseposter.jpg?w=376&dpr=2.6",
  //     name: "Vikram",
  //     rating: "NA",
  //     year: "2022",
  //     storyline:
  //       "Vikram is an upcoming Indian Tamil-language action thriller film starring Kamal Hassan, written and directed by Lokesh Kanagaraj and produced by Raaj Kamal Films.",
  //     trailer: "https://www.youtube.com/embed/Uw17HJkrGR0",
  //   },
  //   {
  //     poster:
  //       "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg",
  //     name: "Dune",
  //     rating: "8.2",
  //     year: "2021",
  //     storyline:
  //       "Dune is a 2021 American epic science fiction film directed by Denis Villeneuve and written by Villeneuve, Jon Spaihts & Eric Roth. It is the adaptation of the 1965 novel by Frank Herbert.",
  //     trailer: "https://www.youtube.com/embed/8g18jFHCLXk",
  //   },
  //   {
  //     poster:
  //       "https://themoviespoiler.com/wp-content/uploads/2020/04/half_of_it_xlg.jpg",
  //     name: "The Half of It",
  //     rating: "6.9",
  //     year: "2020",
  //     storyline:
  //       "A shy, straight-A Chinese-American student helps the school jock woo a girl whom, secretly, they both desire. They find themselves connecting and learn about the nature of love.",
  //     trailer: "https://www.youtube.com/embed/B-yhF7IScUE",
  //   },
  //   {
  //     poster:
  //       "https://64.media.tumblr.com/75090c6af22c4e145e11888e11023cae/tumblr_pn73yqm1rt1sa50hio1_1280.jpg",
  //     name: "Tomb Raider",
  //     rating: "6.3",
  //     year: "2018",
  //     storyline:
  //       "Lara Croft, a courageous and independent young woman, sets out on a dangerous journey to unravel the truth behind her adventurer father's mysterious disappearance.",
  //     trailer: "https://www.youtube.com/embed/8ndhidEmUbI",
  //   },
  //   {
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjQ5NzgwMzExNF5BMl5BanBnXkFtZTgwNjk2NTYyNTM@._V1_FMjpg_UX1000_.jpg",
  //     name: "Meri Pyaari Bindu",
  //     rating: "6",
  //     year: "2017",
  //     storyline:
  //       "Childhood friends Abhimanyu and Bindu face friction when she realises that she does not love him. After getting famous, Abhimanyu decides to pen a story based on his life.",
  //     trailer: "https://www.youtube.com/embed/fTax2lxxAvU",
  //   },
  //   {
  //     poster:
  //       "https://moviegalleri.net/wp-content/gallery/iraivi-movie-release-posters/iraivi_movie_release_posters_8348a49.jpg",
  //     name: "Iraivi",
  //     rating: "8",
  //     year: "2016",
  //     storyline:
  //       "Three men, who are financially struggling, get involved in criminal activities to improve their financial status. They end up in prison and their wives are forced to lead an independent life.",
  //     trailer: "https://www.youtube.com/embed/DH3iKNTT9-M",
  //   },
  //   {
  //     poster:
  //       "https://filmbiopsy.com/wp-content/uploads/2020/03/CXTfbv6WMAAyApR-1.jpg",
  //     name: "Charlie",
  //     rating: "8",
  //     year: "2015",
  //     storyline:
  //       "Tessa runs away from home to avoid getting married and rents a room. She finds a book of the previous occupant, which reveals an incomplete story, and decides to find the artist.",
  //     trailer: "https://www.youtube.com/embed/oYxtLNJJ54Y",
  //   },
  //   {
  //     poster: "https://im.rediff.com/movies/2015/jul/31orange-mittai.jpg",
  //     name: "Orange Mittai",
  //     rating: "6.5",
  //     year: "2015",
  //     storyline:
  //       "Kailasam, who is a 55-year-old man who suffers from a heart medical condition, befriends Sathya and they embark on a journey to discover each other's deepest fears.",
  //     trailer: "https://www.youtube.com/embed/wo5HjdH_BYU",
  //   },
  //   {
  //     poster:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHRpOixn4X7IZwygj1typtUADTkZrBIzH0uUBM-wes9_chod77gb5YWizqFRYLqzdV-wA&usqp=CAU",
  //     name: "The Croods",
  //     rating: "7.2",
  //     year: "2013",
  //     storyline:
  //       "Two very different families join forces to create a new community to survive: a cave person and another person co-op on the most amazing farm in the history of pre-history.",
  //     trailer: "https://www.youtube.com/embed/4fVCKy69zUY",
  //   },
  // ];

  const [mode, setMode] = useState("dark");
  
  //Customizing theme colors using ThemeProvider
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "rgb(255, 77, 7)",
        light: "rgb(255, 112, 56)",
        dark: "rgb(178, 53, 4)",
        contrastText: "#fff",
      },
      // background: {
      //   paper: "rgb(235, 233, 233)",
      //   default: "rgb(235, 233, 233)",
      // }
    },
  });

  const history = useHistory();
  const [movieDetails, setMoviedetails] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{ minWidth: "100vw", minHeight: "100vh", borderRadius: "0px" }}
      >
        <div className="App">
          {/* Creating links to the movie app */}
          <AppBar position="sticky">
            <Toolbar>
              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/")}
              >
                Home
              </Button>

              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/movies")}
              >
                Movies
              </Button>

              <Button
                variant="text"
                color="inherit"
                onClick={() => history.push("/add-movie")}
              >
                Add Movie
              </Button>

              <Button
                sx={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                {" "}
                {mode === "dark" ? "light" : "dark"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          {/* Routing to the different pages */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/movies">
              <MovieDetails/>
            </Route>

            <Route path="/movie-info/:id">
              <MovieInfo />
            </Route>

            <Route path="/add-movie">
              <AddMovie/>
            </Route>

            <Route path="/edit-movies/:id">
              <EditMovies
                movieDetails={movieDetails}
                setMoviedetails={setMoviedetails}
              />
            </Route>

            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
