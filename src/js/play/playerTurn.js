import { shootTheCell } from "./shootTheCell";
import { gameDataObject, computerCellsArray } from "../data/data";
import { displayTurn } from "../utilities/displayThings";
export function playerTurn() {
  console.log("player turn");

  computerCellsArray.forEach((cell) => {
    cell.addEventListener("click", function (e) {
      shootTheCell(cell);
    });
  });

  // have we had a go?
  if ((gameDataObject.currentPlayer = "computer")) {
    displayTurn("Computers Turn");
    console.log("whose turn?", gameDataObject.currentPlayer);
    return;
  }
}
