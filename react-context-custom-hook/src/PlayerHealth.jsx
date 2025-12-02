import "./PlayerHealth.css";
import { useGameData } from "./hooks/useGameData";

const PlayerHealth = ({ badGuy = false }) => {
  const { gameState } = useGameData();
  const color = badGuy ? "red" : "green";
  const healthStyle = {
    color: color,
  };
  return (
    <p className="PlayerHealth" style={healthStyle}>
      {badGuy ? "Enemy" : "Player"} Health:{" "}
      {badGuy ? gameState.enemyHealth : gameState.playerHealth} ❤️‍🔥
    </p>
  );
};

export default PlayerHealth;
