import { randMAbsolute, randomDirection } from "../../utilities/utilities";
import { testShipPosition } from "./testShipPosition";
export function makeShip(shipData, computerCellsArray, gridWidth, gridHeight) {
  const shipDirection = randomDirection();

  // console.log("shipDirection", shipDirection);
  let currentShipData;
  let directionMultiplier;
  if (shipDirection === "horizontal") {
    currentShipData = shipData.horizontal;
    directionMultiplier = 1;
  } else {
    currentShipData = shipData.vertical;
    directionMultiplier = gridWidth;
  }
  let shipStartPosition = randMAbsolute(
    computerCellsArray.length - shipData.horizontal.length * directionMultiplier
  );
  // console.log("shipDirection", shipDirection);

  // test that the ships position is ok
  const isValidShipPosition = testShipPosition(
    currentShipData,
    shipStartPosition,
    shipDirection,
    computerCellsArray,
    gridWidth,
    gridHeight
  );
  if (isValidShipPosition) {
    if (shipDirection === "horizontal") {
      currentShipData.forEach((cell, index) =>
        computerCellsArray[shipStartPosition + index].classList.add(
          "cell_taken",
          shipData.name
        )
      );
    } else {
      // vertical
      currentShipData.forEach((cell, index) =>
        computerCellsArray[shipStartPosition + index * gridWidth].classList.add(
          "cell_taken",
          shipData.name
        )
      );
    }
  } else {
    // console.log("ship position failed - try again  ; ");
    makeShip(shipData, computerCellsArray, gridWidth, gridHeight);
  }
}
