import { playerGrid, computerGrid } from "../data/querySelectors";
import { addPlayerShips } from "./chooseShipsSetup/addPlayerShips";
import { makeShip } from "./computerShipsSetup/makeShip";
import { playerShipsSetup } from "./playerShipsSetup/playerShipsSetup";
import {
  playerCellsArray,
  computerCellsArray,
  shipDataArray,
} from "../data/data";
import { createBoard } from "./boardSetup/createBoard";

export function setup() {
  console.log("setup");
  // add ships to  data to grid_choose_ships
  addPlayerShips();

  // setup boards to add ship data to
  createBoard(playerGrid, playerCellsArray, "p");
  createBoard(computerGrid, computerCellsArray, "c");

  //  make all the computers ships
  for (let index = 0; index < shipDataArray.length; index++) {
    makeShip(shipDataArray[index], computerCellsArray);
  }

  //  add all the players ships to the game board
  playerShipsSetup();
}
