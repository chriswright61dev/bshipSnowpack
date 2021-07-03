import { gameDataObject } from "../data/data";
import { gameOver } from "./gameOver";
import {
  displayInfo,
  displayPlayerInfo,
  displayComputerInfo,
} from "../utilities/displayThings";

export function checkForWin() {
  console.log("checking for wins");
  console.log("gameDataObject", gameDataObject);
  if (
    gameDataObject.DestroyerCellsShotbyPlayer === 2 &&
    gameDataObject.DestroyerSunkbyPlayer === false
  ) {
    displayPlayerInfo("You sank the computers destroyer");
    gameDataObject.DestroyerSunkbyPlayer = true;
  }

  if (
    gameDataObject.SubmarineCellsShotbyPlayer === 3 &&
    gameDataObject.SubmarineSunkbyPlayer === false
  ) {
    displayPlayerInfo("You sank the computers submarine");
    gameDataObject.SubmarineSunkbyPlayer = true;
  }
  if (
    gameDataObject.CruiserCellsShotbyPlayer === 3 &&
    gameDataObject.CruiserSunkbyPlayer === false
  ) {
    displayPlayerInfo("You sank the computers cruiser");
    gameDataObject.CruiserSunkbyPlayer = true;
  }

  if (
    gameDataObject.BattleshipCellsShotbyPlayer === 4 &&
    gameDataObject.BattleshipSunkbyPlayer === false
  ) {
    displayPlayerInfo("You sank the computers battleship");
    gameDataObject.BattleshipSunkbyPlayer = true;
  }

  if (
    gameDataObject.CarrierCellsShotbyPlayer === 5 &&
    gameDataObject.CarrierSunkbyPlayer === false
  ) {
    displayPlayerInfo("You sank the computers carrier");
    gameDataObject.CarrierSunkbyPlayer = true;
  }

  if (
    gameDataObject.DestroyerCellsShotbyComputer === 2 &&
    gameDataObject.DestroyerSunkbyComputer === false
  ) {
    displayComputerInfo("Your destroyer has been sunk");
    gameDataObject.DestroyerSunkbyComputer = true;
  }
  if (
    gameDataObject.SubmarineCellsShotbyComputer === 3 &&
    gameDataObject.SubmarineSunkbyComputer === false
  ) {
    displayComputerInfo("Your submarine has been sunk");
    gameDataObject.SubmarineSunkbyComputer = true;
  }
  if (
    gameDataObject.CruiserCellsShotbyComputer === 3 &&
    gameDataObject.CruiserSunkbyComputer === false
  ) {
    displayComputerInfo("Your cruiser has been sunk");
    gameDataObject.CruiserSunkbyComputer = true;
  }
  if (
    gameDataObject.BattleshipCellsShotbyComputer === 4 &&
    gameDataObject.BattleshipSunkbyComputer === false
  ) {
    displayComputerInfo("Your battleship has been sunk");
    gameDataObject.BattleshipSunkbyComputer = true;
  }
  if (
    gameDataObject.CarrierCellsShotbyComputer === 5 &&
    gameDataObject.CarrierSunkbyComputer === false
  ) {
    displayComputerInfo("Your carrier has been sunk");
    gameDataObject.CarrierSunkbyComputer = true;
  }

  if (
    gameDataObject.DestroyerSunkbyPlayer &&
    gameDataObject.SubmarineSunkbyPlayer &&
    gameDataObject.CruiserSunkbyPlayer &&
    gameDataObject.BattleshipSunkbyPlayer &&
    gameDataObject.CarrierSunkbyPlayer
  ) {
    displayInfo("YOU WIN");
    gameOver();
  }
  if (
    gameDataObject.DestroyerSunkbyComputer &&
    gameDataObject.SubmarineSunkbyComputer &&
    gameDataObject.CruiserSunkbyComputer &&
    gameDataObject.BattleshipSunkbyComputer &&
    gameDataObject.CarrierSunkbyComputer
  ) {
    displayInfo("COMPUTER WINS");
    gameOver();
  }
}
