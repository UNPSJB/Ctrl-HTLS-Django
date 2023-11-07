import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Estrellas = ({ estrellas }) => {
  // Divide las estrellas en parte entera y parte decimal (para las medias estrellas)
  const integerPart = Math.floor(estrellas);
  const decimalPart = estrellas - integerPart;

  // Crea arrays para las estrellas enteras y las medias estrellas
  const integerStarsArray = Array.from({ length: integerPart });
  const showHalfStar = decimalPart >= 0.5;

  return (
    <div className="ml-3 mt-2">
      {integerStarsArray.map((_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}
      {showHalfStar && <FontAwesomeIcon icon={faStarHalfStroke} />}
    </div>
  );
};

export default Estrellas;





