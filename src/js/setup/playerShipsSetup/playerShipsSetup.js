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

// export let playerShipsDisplay = "horizontal";
// TypeError: "playerShipsDisplay" is read-only ???
export const playerShipsDisplay = { direction: "horizontal" };

export function playerShipsSetup() {
  console.log("in player setup");
  const rotateButton = document.querySelector("#rotate_button");
  console.log(rotateButton);
  rotateButton.addEventListener("click", rotatePlayerShips);
}
