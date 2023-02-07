import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieButton = ({ text,icon }) => {
  return <div>
    <FontAwesomeIcon icon={icon} />
    <a href="">{text}</a></div>;
};

export default MovieButton;
