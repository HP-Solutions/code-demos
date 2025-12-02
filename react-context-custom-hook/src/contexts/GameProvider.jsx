import { useState } from "react";
import { GameContext } from "./GameContext";

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    playerHealth: 100,
    enemyHealth: 100,
    dialog: "Engage the enemy! 💥",
    buttonTitle: "FIRE!",
  });

  const attack = () => {
    if (gameState.buttonTitle === "Reset?") {
      setGameState({
        playerHealth: 100,
        enemyHealth: 100,
        dialog: "Engage the enemy! 💥",
        buttonTitle: "FIRE!",
      });
    } else {
      const PlayerDamageDone = dealRandomDamage();
      const EnemyDamageDone = dealRandomDamage();
      let newMessage = gameState.dialog;
      let newButtonTitle = gameState.buttonTitle;
      if (
        gameState.playerHealth - EnemyDamageDone <= 0 &&
        gameState.enemyHealth - PlayerDamageDone <= 0
      ) {
        newMessage = "DRAW!!! Try Again??";
        newButtonTitle = "Reset?";
      } else if (gameState.playerHealth - EnemyDamageDone <= 0) {
        newMessage = "You LOSE!! Try Again??";
        newButtonTitle = "Reset?";
      } else if (gameState.enemyHealth - PlayerDamageDone <= 0) {
        newMessage = "You WIN!! Way to go!";
        newButtonTitle = "Reset?";
      } else {
        newMessage = `You have done ${PlayerDamageDone} damage to the enemy!`;
      }
      setGameState({
        playerHealth:
          gameState.playerHealth - EnemyDamageDone < 0
            ? 0
            : gameState.playerHealth - EnemyDamageDone,
        enemyHealth:
          gameState.enemyHealth - PlayerDamageDone < 0
            ? 0
            : gameState.enemyHealth - PlayerDamageDone,
        dialog: newMessage,
        buttonTitle: newButtonTitle,
      });
    }
  };

  const dealRandomDamage = () => {
    return Math.floor(Math.random() * 25 + 1);
  };

  return (
    // NOTE: In React 19, you can now use the Context object itself as the provider component,
    // making the code cleaner and reducing boilerplate.
    // The older Context.Provider syntax will be deprecated in future versions.
    <GameContext value={{ gameState, setGameState, attack }}>
      {children}
    </GameContext>
  );
};
