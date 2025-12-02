import "./App.css";
import PlayerHealth from "./PlayerHealth";
import Dialog from "./Dialog";
import FireButton from "./FireButton";
// import { useGameData } from "./hooks/useGameData";
import { GameProvider } from "./contexts/GameProvider";
import { GameContext } from "./contexts/GameContext";

function App() {
  // const { gameState, attack } = useGameData();
  //     } else if(gameState.playerHealth - EnemyDamageDone <= 0){
  //       newMessage = 'You LOSE!! Try Again??';
  //       newButtonTitle = 'Reset?'
  //     } else if(gameState.enemyHealth - PlayerDamageDone <= 0){
  //       newMessage = 'You WIN!! Way to go!';
  //       newButtonTitle = 'Reset?'
  //     } else {
  //       newMessage = `You have done ${PlayerDamageDone} damage to the enemy!`;
  //     }
  //     setGameState({
  //       playerHealth: gameState.playerHealth - EnemyDamageDone < 0 ? 0 : gameState.playerHealth - EnemyDamageDone,
  //       enemyHealth: gameState.enemyHealth - PlayerDamageDone < 0 ? 0 : gameState.enemyHealth - PlayerDamageDone ,
  //       dialog: newMessage,
  //       buttonTitle: newButtonTitle
  //     });
  //   }
  // };

  // const dealRandomDamage = () => {
  //   return Math.floor(Math.random() * 25 + 1);
  // };
  return (
    <GameProvider>
      <div className="App">
        <h1>Space Battle Simulator</h1>
        <div className="App-Main">
          <PlayerHealth />
          <FireButton />
          <PlayerHealth badGuy={true} />
        </div>
        <Dialog />
      </div>
    </GameProvider>
  );
}

export default App;
