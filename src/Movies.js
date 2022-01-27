import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Rating, Tooltip, IconButton, Badge } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import EditIcon from "@mui/icons-material/Edit";

export function Movies({ poster, name, rating, year, storyline, id, deleteButton }) {

  //Hide and show the movie storyline
  const [show, setShow] = useState(true);
  const styles = show ? { display: "block" } : { display: "none" };

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  //Getting id for url through useHistory hook
  const history = useHistory();

  return (
    <div className="movie-card">
      <img src={poster} alt={name} />
      <h4 className="title">{name}</h4>

      <div className="movie-card-specs">
        <p>
          <Tooltip title={rating} arrow>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.1}
              max={10}
              size="small"
            />
          </Tooltip>
        </p>

        <p>Year of Release: {year}</p>

        <div className="movie-card-info">
          <p>
            Storyline
            <IconButton
              color="primary"
              aria-label="Toggle Summary"
              onClick={() => setShow(!show)}
            >
              {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
          </p>

          <IconButton
            aria-label="Movie Details"
            onClick={() => history.push("/movie-info/" + id)}
          >
            <InfoIcon fontSize="small" color="secondary" />
          </IconButton>
        </div>
        <p style={styles} className="summary">
          {storyline}
        </p>

        <div className="movie-card-buttons">
          <div className="like-button">
            <IconButton
              aria-label="Like Button"
              color="success"
              onClick={() => setLike(like + 1)}
            >
              <Badge badgeContent={like}>
                <ThumbUpAltIcon fontSize="small" />
              </Badge>
            </IconButton>

            <IconButton
              aria-label="Dislike Button"
              color="error"
              onClick={() => setDislike(dislike + 1)}
            >
              <Badge badgeContent={dislike}>
                <ThumbDownAltIcon fontSize="small" />
              </Badge>
            </IconButton>
          </div>

          <div className="edit-button">
            <IconButton
              aria-label="Edit Button"
              onClick={() => history.push("/edit-movies/" + id)}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            {deleteButton}
          </div>
        </div>
      </div>
    </div>
  );
}
