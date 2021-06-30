import { playerCellsArray } from "../../data/data.js";
import { dragDrop } from "./dragFunctions/dragDrop.js";
import { dragEnd } from "./dragFunctions/dragEnd.js";
import { dragEnter } from "./dragFunctions/dragEnter.js";
import { dragLeave } from "./dragFunctions/dragLeave.js";
import { dragOver } from "./dragFunctions/dragOver.js";
import { dragStart } from "./dragFunctions/dragStart.js";
import { rotatePlayerShips } from "./rotatePlayerShips";

export function playerShipsSetup() {
  const rotateButton = document.querySelector("#rotate_button");
  rotateButton.addEventListener("click", rotatePlayerShips);
}
