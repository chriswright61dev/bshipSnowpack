import { playerCellsArray } from "../../data/data.js";
import { dragDrop } from "./dragFunctions/dragDrop.js";
import { dragEnd } from "./dragFunctions/dragEnd.js";
import { dragEnter } from "./dragFunctions/dragEnter.js";
import { dragLeave } from "./dragFunctions/dragLeave.js";
import { dragOver } from "./dragFunctions/dragOver.js";
import { dragStart } from "./dragFunctions/dragStart.js";
import { rotatePlayerShips } from "./rotatePlayerShips";

//   set up some state for other functions to use
export let draggedItems = {
  draggedShip: null,
  draggedShipLength: 0,
  selectedShipNameWithIndex: "",
};

export const playerShipsDisplay = { direction: "horizontal" };

export function playerShipsSetup() {
  const rotateButton = document.querySelector("#rotate_button");
  rotateButton.addEventListener("click", rotatePlayerShips);

  //  target the divs on the choose ships board
  const ships = document.querySelectorAll(".ship");
  // an array of the ships container divs

  ships.forEach((ship) => ship.addEventListener("dragstart", dragStart));
  ships.forEach((ship) =>
    ship.addEventListener("mousedown", (e) => {
      draggedItems.selectedShipNameWithIndex = e.target.id;
    })
  );

  //   playerCellsArray references the html playerGrid
  playerCellsArray.forEach((cell) =>
    cell.addEventListener("dragstart", dragStart)
  );
  playerCellsArray.forEach((cell) =>
    cell.addEventListener("dragover", dragOver)
  );
  playerCellsArray.forEach((cell) =>
    cell.addEventListener("dragenter", dragEnter)
  );
  playerCellsArray.forEach((cell) =>
    cell.addEventListener("dragleave", dragLeave)
  );
  playerCellsArray.forEach((cell) => cell.addEventListener("drop", dragDrop));

  playerCellsArray.forEach((cell) => cell.addEventListener("dragend", dragEnd));
}
