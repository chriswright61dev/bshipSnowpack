import { gameDataObject } from "../data/data";
import { gameOver } from "./gameOver";
export function checkForWin() {
  const infoDisplay = document.querySelector("#info_display");

  // const turnDisplay = document.querySelector("#whose_turn");
  // turnDisplay.innerText = "It's Your Turn";
  infoDisplay.innerText = "Playing the game now";

  console.log("checking for wins");
  if (gameDataObject.DestroyerCellsShotbyPlayer === 2) {
    infoDisplay.innerText = "You sank the computers destroyer";
    gameDataObject.DestroyerSunkbyPlayer = true;
  }

  if (gameDataObject.SubmarineCellsShotbyPlayer === 3) {
    infoDisplay.innerText = "You sank the computers submarine";
    gameDataObject.SubmarineSunkbyPlayer = true;
  }
  if (gameDataObject.CruiserCellsShotbyPlayer === 3) {
    infoDisplay.innerText = "You sank the computers cruiser";
    gameDataObject.CruiserSunkbyPlayer = true;
  }

  if (gameDataObject.BattleshipCellsShotbyPlayer === 4) {
    infoDisplay.innerText = "You sank the computers battleship";
    gameDataObject.BattleshipSunkbyPlayer = true;
  }

  if (gameDataObject.CarrierCellsShotbyPlayer === 5) {
    infoDisplay.innerText = "You sank the computers carrier";
    gameDataObject.CarrierSunkbyPlayer = true;
  }

  if (gameDataObject.DestroyerCellsShotbyComputer === 2) {
    infoDisplay.innerText = "Your destroyer has been sunk";
    gameDataObject.DestroyerSunkbyComputer = true;
  }
  if (gameDataObject.SubmarineCellsShotbyComputer === 3) {
    infoDisplay.innerText = "Your submarine has been sunk";
    gameDataObject.SubmarineSunkbyComputer = true;
  }
  if (gameDataObject.CruiserCellsShotbyComputer === 3) {
    infoDisplay.innerText = "Your cruiser has been sunk";
    gameDataObject.CruiserSunkbyComputer = true;
  }
  if (gameDataObject.BattleshipCellsShotbyComputer === 4) {
    infoDisplay.innerText = "Your battleship has been sunk";
    gameDataObject.BattleshipSunkbyComputer = true;
  }
  if (gameDataObject.CarrierCellsShotbyComputer === 5) {
    infoDisplay.innerText = "Your carrier has been sunk";
    gameDataObject.CarrierSunkbyComputer = true;
  }

  if (
    gameDataObject.DestroyerSunkbyPlayer &&
    gameDataObject.SubmarineSunkbyPlayer &&
    gameDataObject.CruiserSunkbyPlayer &&
    gameDataObject.BattleshipSunkbyPlayer &&
    gameDataObject.CarrierSunkbyPlayer
  ) {
    infoDisplay.innerHTML = "YOU WIN";
    gameOver();
  }
  if (
    gameDataObject.DestroyerSunkbyComputer &&
    gameDataObject.SubmarineSunkbyComputer &&
    gameDataObject.CruiserSunkbyComputer &&
    gameDataObject.BattleshipSunkbyComputer &&
    gameDataObject.CarrierSunkbyComputer
  ) {
    infoDisplay.innerHTML = "COMPUTER WINS";
    gameOver();
  }
}
