import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HabitacionCard from "./HabitacionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function HabitacionList({ habitaciones, onCountChange }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={() => onClick()}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full ml-96"
      >
        <FontAwesomeIcon icon={faChevronRight} size="2x" />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={() => onClick()}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full mr-96"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </button>
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">HABITACIONES</h2>
      <div className="mx-32">
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {habitaciones.map((tipo, index) => (
            <HabitacionCard
              key={index}
              tipo={tipo}
              onCountChange={onCountChange}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HabitacionList;
