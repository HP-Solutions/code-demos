import { use } from "react";
import { GameContext } from "../contexts/GameContext";

export function useGameData() {
  // In React 19, you can use the use API, which has the significant benefit of
  // being able to be called conditionally and within loops (unlike traditional Hooks).
  const context = use(GameContext);

  if (!context) {
    throw new Error("useGameData must be used within a GameProvider");
  }

  return context;
}

export default useGameData;
