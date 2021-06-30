export function isCellBeyondBoundaryBottom(
  currentShipData,
  shipStartPosition,
  shipDirection,
  gridWidth,
  gridHeight
) {
  // if ship is horizontal it can start on any cell
  if (shipDirection === "horizontal") {
    return false;
  }
  // ship is vertical
  // needs space to fit in so start position must be shiplength rows up

  const shipSize = currentShipData.length;

  // gridHeight undefined
  const lastGoodCell = (gridHeight - shipSize + 1) * gridWidth;
  // lastGoodCell NaN
  return shipStartPosition < lastGoodCell ? false : true;
}
