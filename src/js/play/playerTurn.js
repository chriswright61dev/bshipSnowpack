import { shootTheCell } from "./shootTheCell";

export function playerTurn() {
  computerCellsArray.forEach((cell) => {
    cell.addEventListener("click", function (e) {
      shootTheCell(cell);
    });
  });
}
