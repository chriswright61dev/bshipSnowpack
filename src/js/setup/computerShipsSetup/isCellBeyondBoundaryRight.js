export function isCellBeyondBoundaryRight( // false is good
  currentShipData,
  shipStartPosition,
  shipDirection,
  computerCellsArray
) {
  // if ship is vertical it can start on any cell -
  // bottom boundary test will take care of it
  if (shipDirection === "vertical") {
    return false;
  }
  // ship is horizontal
  // if the last cell is on a boundary thats ok

  const lastHorizontalShipCell = shipStartPosition + currentShipData.length - 1;
  if (
    computerCellsArray[lastHorizontalShipCell].classList.contains(
      "right_boundary"
    )
  ) {
    // last cell is on a boundary
    return false;
  }

  // are any other cells  on the boundary?
  return currentShipData.some((index) =>
    computerCellsArray[shipStartPosition + index].classList.contains(
      "right_boundary"
    )
  );
}
