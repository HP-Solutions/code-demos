import "./FireButton.css";
import useGameData from "./hooks/useGameData";

const FireButton = ({ title = "FIRE!!" }) => {
  const { attack } = useGameData();

  return (
    <button className="FireButton" onClick={attack}>
      {title}
    </button>
  );
};

export default FireButton;
