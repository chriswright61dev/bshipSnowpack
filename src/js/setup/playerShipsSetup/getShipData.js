import { shipDataArray } from "../../data/data";

export function getShipData(shipName, shipDirection) {
  for (let index = 0; index < shipDataArray.length; index++) {
    if (
      shipDirection === "horizontal" &&
      shipDataArray[index].name === shipName
    ) {
      return shipDataArray[index].horizontal;
    } else if (
      shipDirection === "vertical" &&
      shipDataArray[index].name === shipName
    ) {
      return shipDataArray[index].vertical;
    }
  }
}
