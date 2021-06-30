import { gridWidth, gridHeight, shipDataArray } from "../../gameData.js";
import { playerCellsArray } from "../../../index.js";
export function verticalBoundaryCheck(
  shipLastId,
  shiplength,
  shipDataVertical
) {
  let startcell = shipLastId - (shiplength - 1) * gridWidth;
  // bottom error - if last cell > 144 or max cell number
  if (shipLastId > gridWidth * gridHeight) {
    console.log("cell out of range");
    return false;
  }
  // if last cell is on bottom boundary its ok
  if (playerCellsArray[shipLastId].classList.contains("bottom-boundary")) {
    console.log("ends on bottom boundary its good");
    return true;
  }
  // top error
  if (startcell < 0) {
    console.log("sticking out of the top");
    return false;
  } else {
    return true;
  }
}
