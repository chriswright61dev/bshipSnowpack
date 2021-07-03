// import { chooseShipsGrid } from "../../data/querySelectors";

export function makeContainer(name, cellCount) {
  const chooseShipsGrid = document.querySelector(".grid_choose_ships");
  const ShipContainer = document.createElement("div");
  const containerClasses = "ship " + name + "_container";
  ShipContainer.className = containerClasses;
  ShipContainer.setAttribute("draggable", true);
  const cell = [];
  for (let index = 0; index < cellCount; index++) {
    cell[index] = document.createElement("div");
    cell[index].id = name + "_" + index;

    ShipContainer.appendChild(cell[index]);
  }
  chooseShipsGrid.appendChild(ShipContainer);
}
