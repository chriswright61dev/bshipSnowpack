import { gameDataObject, playerCellsArray } from "../data/data";
import { randMAbsolute } from "../utilities/utilities";
import { displayTurn, displayInfo } from "./displayThings";
export function computerTurn() {
  console.log("computer turn");

  const turnDisplay = document.querySelector("#turn_display");

  let randomCell = randMAbsolute(playerCellsArray.length);

  if (playerCellsArray[randomCell].classList.contains("tested")) {
    // console.log("already tried this cell");
    computerTurn();
  } else {
    // console.log("never tried this cell before", randomCell);
    playerCellsArray[randomCell].classList.add("tested");

    if (playerCellsArray[randomCell].classList.contains("destroyer")) {
      gameDataObject.DestroyerCellsShotbyComputer++;
      playerCellsArray[randomCell].classList.add("hit");
      displayInfo("Computer Hit Your Destroyer");
    } else if (playerCellsArray[randomCell].classList.contains("submarine")) {
      gameDataObject.SubmarineCellsShotbyComputer++;
      playerCellsArray[randomCell].classList.add("hit");
      displayInfo("Computer Hit Your Submarine");
    } else if (playerCellsArray[randomCell].classList.contains("cruiser")) {
      gameDataObject.CruiserCellsShotbyComputer++;
      playerCellsArray[randomCell].classList.add("hit");
      displayInfo("Computer Hit Your Cruiser");
    } else if (playerCellsArray[randomCell].classList.contains("battleship")) {
      gameDataObject.BattleshipCellsShotbyComputer++;
      playerCellsArray[randomCell].classList.add("hit");
      displayInfo("Computer Hit Your Battleship");
    } else if (playerCellsArray[randomCell].classList.contains("carrier")) {
      gameDataObject.CarrierCellsShotbyComputer++;
      playerCellsArray[randomCell].classList.add("hit");
      displayInfo("Computer Hit Your Carrier");
    } else {
      playerCellsArray[randomCell].classList.add("miss");
      displayInfo("Computer Missed");
    }
  }
  displayTurn("Your Turn");
  gameDataObject.currentPlayer = "player";
}
