import { isCellBeyondBoundaryBottom } from "./isCellBeyondBoundaryBottom";
import { isCellBeyondBoundaryRight } from "./isCellBeyondBoundaryRight";
import { isCellTaken } from "./isCellTaken";

export function testShipPosition(
  currentShipData,
  shipStartPosition,
  shipDirection,
  computerCellsArray,
  gridWidth,
  gridHeight
) {
  if (
    // will the cell position exceed the number of cells in the grid
    // do this out of range test first so that other tests dont fail
    isCellBeyondBoundaryBottom(
      currentShipData,
      shipStartPosition,
      shipDirection,
      gridWidth,
      gridHeight
    )
  ) {
    return false;
  }
  // does the ship go beyond the squares and wrap
  if (
    isCellBeyondBoundaryRight(
      currentShipData,
      shipStartPosition,
      shipDirection,
      computerCellsArray
    )
  ) {
    return false;
  }

  // has the cell already got a ship in it
  if (
    isCellTaken(
      currentShipData,
      shipStartPosition,
      shipDirection,
      computerCellsArray
    )
  ) {
    return false;
  }
  return true; // good to go
}
