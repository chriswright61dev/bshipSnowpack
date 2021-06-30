import { getShipData } from "./getShipData";
import { playerCellsArray, gridWidth } from "../../data/data";
import { verticalBoundaryCheck } from "./positionTests/verticalBoundaryCheck";
import { overlapCheckVertical } from "./positionTests/overlapCheckVertical";
// import { gameSetup } from "../gameSetup.js";
export function verticalSetup(
  shipName,
  shipLength,
  draggedShipContainer,
  lastShipIndex,
  selectedShipIndex,
  droppedOnCellId
) {
  console.log("vertical setup ");
  const chooseShipsGrid = document.querySelector(".grid_choose_ships");
  let shipDataVertical = getShipData(shipName, "vertical");

  let shipLastIdV =
    (lastShipIndex - selectedShipIndex) * gridWidth + droppedOnCellId;

  let verticalPositionGood = verticalBoundaryCheck(
    shipLastIdV,
    shipLength,
    shipDataVertical
  );

  // console.log("verticalPositionGood", verticalPositionGood);

  let verticalOverlapGood = !overlapCheckVertical(
    shipLastIdV,
    shipLength,
    shipDataVertical
  );
  // console.log("verticalOverlapGood", verticalOverlapGood);

  if (verticalPositionGood && verticalOverlapGood) {
    // console.log("vertical draw");
    for (let index = 0; index < shipLength; index++) {
      // for (let index = 0; index < draggedShipLength; index++) {
      playerCellsArray[
        droppedOnCellId + (index - selectedShipIndex) * gridWidth
      ].classList.add("cell_taken", shipName);
    }
    chooseShipsGrid.removeChild(draggedShipContainer);
  }

  // if chooseShipsGrid empty set some state
  if (chooseShipsGrid.children.length === 0) {
    // gameSetup();
  }
}
