import { playerCellsArray } from "../../../index.js";

// check that no cell thats dropped is already taken
export function overlapCheckHorizontal(
  shipLastId,
  shiplength,
  shipDataHorizontal
) {
  let startcell = shipLastId - shiplength + 1;

  return !shipDataHorizontal.some((index) =>
    playerCellsArray[startcell + index].classList.contains("cell_taken")
  );
}
