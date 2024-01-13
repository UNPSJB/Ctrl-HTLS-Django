import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Estrellas({ stars }) {
  let starComponents = [];
  for (let i = 0; i < Math.floor(stars); i++) {
    starComponents.push(
      <FontAwesomeIcon icon={fullStar} key={i} color="#FFD700" size="lg" />
    );
  }
  if (stars % 1 !== 0) {
    starComponents.push(
      <FontAwesomeIcon icon={halfStar} key={stars} color="#FFD700" size="lg" />
    );
    stars = Math.floor(stars) + 1;
  }
  for (let i = stars; i < 5; i++) {
    starComponents.push(
      <FontAwesomeIcon icon={emptyStar} key={i} color="#FFD700" size="lg" />
    );
  }
  return <div>{starComponents}</div>;
}

export default Estrellas;
