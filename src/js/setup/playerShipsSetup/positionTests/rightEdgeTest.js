export function rightEdgeTest(shipData, startPosition, shipDirection) {
  // if horizontal and any cell except the last cell is a right boundary
  // return true

  let boundary = shipData.some((index) =>
    computerCellsArray[startPosition + index].classList.contains(
      "right_boundary"
    )
  );

  let lastHorizontalShipCell = startPosition + shipData.length - 1;
  let boundaryLastCell;

  boundaryLastCell =
    shipDirection === "horizontal" &&
    computerCellsArray[lastHorizontalShipCell].classList.contains(
      "right_boundary"
    )
      ? true
      : false;

  if (shipDirection === "horizontal" && boundary && !boundaryLastCell) {
    // console.log("boundary error");
    return true;
  } else {
    return false;
  }
}
