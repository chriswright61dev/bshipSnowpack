import { gridWidth, gridHeight, shipDataArray } from "../../gameData.js";
import { playerCellsArray } from "../../../index.js";
export function overlapCheckVertical(shipLastId, shiplength, shipDataVertical) {
  let startcell = shipLastId - (shiplength - 1) * gridWidth;

  if (shipLastId > gridWidth * gridHeight || startcell < 0) {
    console.log("cell out of range");
    return false;
    // lets avoid crashing because theres no classlist on non existant cells
  }

  const isTaken = (element) => {
    return playerCellsArray[startcell + element].classList.contains(
      "cell_taken"
    );
  };

  return shipDataVertical.some(isTaken);
}
