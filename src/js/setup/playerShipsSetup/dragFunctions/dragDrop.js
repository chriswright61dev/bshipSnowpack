import { playerShipsDisplay, draggedItems } from "../playerShipsSetup";
import { justChildNodesWithIdArray } from "../justChildNodesWithIdArray";
import { horizontalSetup } from "../horizontalSetup";
import { verticalSetup } from "../verticalSetup";
import { playGame } from "../../../play/playGame";
import { displayInfo, hideRotateButton } from "../../../play/displayThings";
export function dragDrop() {
  console.log("in drag drop");
  console.log("playerShipsDisplay", playerShipsDisplay);
  // the main function - when dropped
  let draggedShipContainer = draggedItems.draggedShip;
  // this is the whole div ship container
  // let draggedShipLength = draggedItems.draggedShipLength;
  let draggedShipChildren = justChildNodesWithIdArray(draggedShipContainer);
  // an array of all the divs in the container

  let shipNameWithLastId =
    draggedShipChildren[draggedShipChildren.length - 1].id;
  // the id of the last div of the ship
  // eg submarine-2

  let shipName = shipNameWithLastId.slice(0, -2);
  //   name of the ship with the id stripped off

  let selectedShipIndex = parseInt(
    draggedItems.selectedShipNameWithIndex.substr(-1)
  );
  // the ship cell that is actually being dragged - the number

  let lastShipIndex = parseInt(shipNameWithLastId.substr(-1));
  // index of last cell of the ship - 4 if a carrier etc
  // very much like length of the ship draggedShipLength
  let shipLength = lastShipIndex + 1;
  // console.log("shipLength", shipLength, "draggedShipLength", draggedShipLength);
  // the same as draggedShipLength

  let droppedOnCellId = parseInt(this.id.substr(1));
  // I added an id with a letter and number to each cell -
  // so strip the letter and get the number to reference the cells array

  // horizontal ship
  if (playerShipsDisplay.direction === "horizontal") {
    horizontalSetup(
      shipName,
      shipLength,
      draggedShipContainer,
      lastShipIndex,
      selectedShipIndex,
      droppedOnCellId
    );
  }
  // vertical ship
  if (playerShipsDisplay.direction === "vertical") {
    verticalSetup(
      shipName,
      shipLength,
      draggedShipContainer,
      lastShipIndex,
      selectedShipIndex,
      droppedOnCellId
    );
  }

  // is there anything left to drop
  const chooseBoard = document.querySelector(".grid_choose_ships");
  //   this is full of formatting text nodes so remove them
  const remain = justChildNodesWithIdArray(chooseBoard);
  if (justChildNodesWithIdArray(chooseBoard).length === 0) {
    // hide the rotate button
    hideRotateButton();
    displayInfo("Play! Choose a Target");
    playGame();
  }
}
