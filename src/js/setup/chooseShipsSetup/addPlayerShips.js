import { makeContainer } from "./makeContainer";
import { shipDataArray } from "../../data/data";
export function addPlayerShips() {
  shipDataArray.forEach((ship) => {
    makeContainer(ship.name, ship.size);
  });
}
