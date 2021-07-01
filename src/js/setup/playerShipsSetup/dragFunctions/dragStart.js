// import { draggedItems } from "../playerShipsSetup";
import { draggedItems } from "../../../data/data";
import { justChildNodesWithIdArray } from "../justChildNodesWithIdArray";
export function dragStart() {
  // console.log("in drag start");
  const draggedShip = this;
  //   console.log("draggedShip", draggedShip);
  // the div
  //   let draggedShipLength = this.length;
  //   undefined;
  //   array of child nodes with ids
  let draggedShipLength = justChildNodesWithIdArray(this).length;

  // console.log("draggedShipLength", draggedShipLength);
  //  update the local state
  draggedItems.draggedShip = draggedShip;
  draggedItems.draggedShipLength = draggedShipLength;
}
