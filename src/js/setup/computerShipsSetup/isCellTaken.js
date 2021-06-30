export function isCellTaken(
  currentShipData,
  shipStartPosition,
  shipDirection,
  computerCellsArray
) {
  if (shipDirection === "horizontal") {
    return currentShipData.some((index) =>
      computerCellsArray[shipStartPosition + index].classList.contains(
        "cell_taken"
      )
    );
  }
  // ship is vertical
  return currentShipData.some((index) =>
    computerCellsArray[shipStartPosition + index].classList.contains(
      "cell_taken"
    )
  );
}
