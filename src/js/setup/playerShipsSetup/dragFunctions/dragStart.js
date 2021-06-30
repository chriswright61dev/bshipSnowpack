import { draggedItems } from "../playerShipsSetup";

export function dragStart() {
  console.log("in drag start");
  const draggedShip = this;
  console.log("draggedShip", draggedShip);
  // the div
  let draggedShipLength = this.length;
  undefined;

  console.log("draggedShipLength", draggedShipLength);
  // // update the local state
  //   draggedItems.draggedShip = draggedShip;
  //   draggedItems.draggedShipLength = draggedShipLength;
}
