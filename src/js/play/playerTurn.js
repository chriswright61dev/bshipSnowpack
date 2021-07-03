import { shootTheCell } from "./shootTheCell";
import { gameDataObject, computerCellsArray } from "../data/data";
import { displayTurn } from "../utilities/displayThings";
export function playerTurn() {
  computerCellsArray.forEach((cell) => {
    cell.addEventListener("click", function (e) {
      shootTheCell(cell);
    });
  });

  if (gameDataObject.currentPlayer === "computer") {
    displayTurn("Computers Turn");
    return;
  }
}
