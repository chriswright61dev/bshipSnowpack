import { gameDataObject, playerCellsArray } from "../data/data";
import { randMAbsolute } from "../utilities/utilities";
export function computerTurn() {
  console.log("computer turn");

  const turnDisplay = document.querySelector("#turn_display");

  let randomCell = randMAbsolute(playerCellsArray.length);

  if (playerCellsArray[randomCell].classList.contains("tested")) {
    console.log("already tried this cell");
    computerTurn();
  } else {
    console.log("never tried this cell before", randomCell);
    playerCellsArray[randomCell].classList.add("tested");

    if (playerCellsArray[randomCell].classList.contains("destroyer")) {
      gameDataObject.computerDestroyerCount++;
      playerCellsArray[randomCell].classList.add("hit");
    } else if (playerCellsArray[randomCell].classList.contains("submarine")) {
      gameDataObject.computerSubmarineCount++;
      playerCellsArray[randomCell].classList.add("hit");
    } else if (playerCellsArray[randomCell].classList.contains("cruiser")) {
      gameDataObject.computerCruiserCount++;
      playerCellsArray[randomCell].classList.add("hit");
    } else if (playerCellsArray[randomCell].classList.contains("battleship")) {
      gameDataObject.computerBattleshipCount++;
      playerCellsArray[randomCell].classList.add("hit");
    } else if (playerCellsArray[randomCell].classList.contains("carrier")) {
      gameDataObject.computerCarrierCount++;
      playerCellsArray[randomCell].classList.add("hit");
    } else {
      playerCellsArray[randomCell].classList.add("miss");
    }
  }
  turnDisplay.innerHTML = "Your Turn";
  gameDataObject.currentPlayer = "player";
}
