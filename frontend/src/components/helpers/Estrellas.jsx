import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Estrellas({ stars }) {
  let starComponents = [];
  for (let i = 0; i < Math.floor(stars); i++) {
    starComponents.push(<FontAwesomeIcon icon={fullStar} key={i} />);
  }
  if (stars % 1 !== 0) {
    starComponents.push(<FontAwesomeIcon icon={halfStar} key={stars} />);
    stars = Math.floor(stars) + 1;
  }
  for (let i = stars; i < 5; i++) {
    starComponents.push(<FontAwesomeIcon icon={emptyStar} key={i} />);
  }
  return <div>{starComponents}</div>;
}

export default Estrellas;
