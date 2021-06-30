import { getShipData } from "./getShipData.js";
import { playerCellsArray } from "../../data/data";
import { horizontalBoundaryCheck } from "./positionTests/horizontalBoundaryCheck.js";
import { overlapCheckHorizontal } from "./positionTests/overlapCheckHorizontal.js";
import { chooseShipsGrid } from "../../data/querySelectors";
// import { gameSetup } from "../gameSetup.js";

export function horizontalSetup(
  shipName,
  shipLength,
  draggedShipContainer,
  lastShipIndex,
  selectedShipIndex,
  droppedOnCellId
) {
  console.log("in horizontal setup");
  // const chooseShipsGrid = document.querySelector(".grid_choose_ships");
  let shipDataHorizontal = getShipData(shipName, "horizontal");
  let shipLastIdH = lastShipIndex + droppedOnCellId - selectedShipIndex;
  // the cell number of the player grid
  // that the last ship cell will be dropped on
  // console.log(
  //   "shipLastIdH",
  //   shipLastIdH,
  //   "selectedShipIndex",
  //   selectedShipIndex
  // );}

  let horizontalPositionGood = horizontalBoundaryCheck(
    shipLastIdH,
    shipLength,
    shipDataHorizontal
  );
  let noOverlapH = overlapCheckHorizontal(
    shipLastIdH,
    shipLength,
    shipDataHorizontal
  );
  if (horizontalPositionGood && noOverlapH) {
    // all good to drop and update
    for (let index = 0; index < shipLength; index++) {
      // for (let index = 0; index < draggedShipLength; index++) {

      playerCellsArray[
        droppedOnCellId - selectedShipIndex + index
      ].classList.add("cell_taken", shipName, "playerShip");
    }
    chooseShipsGrid.removeChild(draggedShipContainer);
  }

  // if chooseShipsGrid empty set some state
  if (chooseShipsGrid.children.length === 0) {
    // gameSetup();
  }
}
