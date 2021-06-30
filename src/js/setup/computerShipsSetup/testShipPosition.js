export function testShipPosition(
  currentShipData,
  shipStartPosition,
  shipDirection,
  computerCellsArray,
  gridWidth,
  gridHeight
) {
  // do this out of range test first so that other tests dont fail
  //  will the cell position exceed the number of cells in the grid
  //  isCellBeyondBoundaryBottom()
  // does the ship go beyond the square
  //  isCellBeyondBoundaryRight()
  // has the cell already got a ship in it
  //  isCellTaken()
}
