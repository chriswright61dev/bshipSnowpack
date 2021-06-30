import { playerCellsArray } from "../../../index.js";

// check for good position - true is ok
export function horizontalBoundaryCheck(
  shipLastId,
  shiplength,
  shipDataHorizontal
) {
  let startcell = shipLastId - shiplength + 1;
  // if Start cell is on left boundary is ok
  if (playerCellsArray[startcell].classList.contains("left_boundary")) {
    // console.log("starts on left boundary");
    return true;
  }
  // any other cell on left boundary is not ok
  if (
    shipDataHorizontal.some((index) =>
      playerCellsArray[startcell + index].classList.contains("left_boundary")
    )
  ) {
    console.log("leftBoundary error");
    return false;
  }
  // console.log("horizontal boundary check true is ok to proceed");
  return true;
}
