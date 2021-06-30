const playerGrid = document.querySelector(".grid_player");
const computerGrid = document.querySelector(".grid_computer");
import { makeShip } from "./computerShipsSetup/makeShip";
import {
  gridWidth,
  gridHeight,
  playerCellsArray,
  computerCellsArray,
  shipDataArray,
} from "../data/data";
import { createBoard } from "./boardSetup/createBoard";
export function setup() {
  // setup boards to add ship data to
  //   gridName, cellsArray, gridWidth, gridHeight, idname;
  createBoard(playerGrid, playerCellsArray, gridWidth, gridHeight, "p");
  createBoard(computerGrid, computerCellsArray, gridWidth, gridHeight, "c");

  // make 1 ship
  // makeShip(shipDataArray[0], computerCellsArray, gridWidth, gridHeight);
  //  make all the computers ships
  for (let index = 0; index < shipDataArray.length; index++) {
    makeShip(shipDataArray[index], computerCellsArray, gridWidth, gridHeight);
  }
}
