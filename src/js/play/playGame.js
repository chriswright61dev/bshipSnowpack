import { gameDataObject, computerCellsArray } from "../data/data";

import { playerTurn } from "./playerTurn";
import { computerTurn } from "./computerTurn";
import { checkForWin } from "./checkForWin";

export function playGame() {
  if (gameDataObject.isGameOver === true) {
    return; // game is over
  }
  // check for win and sinking
  checkForWin();

  if (gameDataObject.currentPlayer === "player") {
    playerTurn();
  }
  if (gameDataObject.currentPlayer === "computer") {
    computerTurn();
  }
}
