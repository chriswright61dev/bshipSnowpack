const playerGrid = document.querySelector(".grid_player");
const computerGrid = document.querySelector(".grid_computer");
import {
  gridWidth,
  gridHeight,
  playerCellsArray,
  computerCellsArray,
} from "../data/data";
import { createBoard } from "./boardSetup/createBoard";
export function setup() {
  // setup boards to add ship data to
  //   gridName, cellsArray, gridWidth, gridHeight, idname;
  createBoard(playerGrid, playerCellsArray, gridWidth, gridHeight, "p");
  createBoard(computerGrid, computerCellsArray, gridWidth, gridHeight, "c");
}
