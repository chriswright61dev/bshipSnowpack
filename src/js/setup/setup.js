import { playerGrid, computerGrid } from "../data/querySelectors";

import { makeShip } from "./computerShipsSetup/makeShip";
import { playerShipsSetup } from "./playerShipsSetup/playerShipsSetup";
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
  createBoard(playerGrid, playerCellsArray, gridWidth, gridHeight, "p");
  createBoard(computerGrid, computerCellsArray, gridWidth, gridHeight, "c");

  //  make all the computers ships
  for (let index = 0; index < shipDataArray.length; index++) {
    makeShip(shipDataArray[index], computerCellsArray, gridWidth, gridHeight);
  }

  //  add all the players ships
  playerShipsSetup();
}
