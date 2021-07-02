// import { playerGrid, computerGrid } from "../../data/querySelectors";

export function clearBoard(grid, cellsArray) {
  cellsArray = [];
  grid.innerHTML = "";
  console.log("cellsArray  ", cellsArray);
  console.log("grid after", grid);
}
