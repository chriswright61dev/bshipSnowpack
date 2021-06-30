import { gameDataObject } from "../../../data/data";
import { draggedItems } from "../playerShipsSetup";

// import functions
import { horizontalSetup } from "../horizontalSetup.js";
import { verticalSetup } from "../verticalSetup.js";
import { justChildNodesWithIdArray } from "../justChildNodesWithIdArray.js";

export function dragDrop() {
  console.log("in drag drop");

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
}
