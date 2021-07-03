import { draggedItems } from "../../../data/data";
import { justChildNodesWithIdArray } from "../justChildNodesWithIdArray";
export function dragStart() {
  const draggedShip = this;
  // the div
  //   let draggedShipLength = this.length;
  //   array of child nodes with ids
  let draggedShipLength = justChildNodesWithIdArray(this).length;
  //  update the  state
  draggedItems.draggedShip = draggedShip;
  draggedItems.draggedShipLength = draggedShipLength;
}
