import { gameDataObject } from "../data/data";
import { playGame } from "./playGame";

export function shootTheCell(cell) {
  const infoDisplay = document.querySelector("#info_display");
  console.log("in the player shooting function");

  if (cell.classList.contains("tested")) {
    console.log("already done this one - try again");
    playGame();
  } else {
    cell.classList.add("tested");
    if (cell.classList.contains("destroyer")) {
      gameDataObject.DestroyerCellsShotbyPlayer++;
      console.log("destroyer hit");
      infoDisplay.innerText = "You hit the a destroyer";
    }
    if (cell.classList.contains("submarine")) {
      console.log("submarine hit");
      infoDisplay.innerText = "A Hit";
      gameDataObject.SubmarineCellsShotbyPlayer++;
    }
    if (cell.classList.contains("cruiser")) {
      console.log("cruiser hit");
      infoDisplay.innerText = "A Hit";
      gameDataObject.CruiserCellsShotbyPlayer++;
    }
    if (cell.classList.contains("battleship")) {
      console.log("battleship hit");
      infoDisplay.innerText = "A Hit";
      gameDataObject.BattleshipCellsShotbyPlayer++;
    }
    if (cell.classList.contains("carrier")) {
      console.log("carrier hit");
      infoDisplay.innerText = "A Hit";
      gameDataObject.CarrierCellsShotbyPlayer++;
    }
  }

  if (cell.classList.contains("cell_taken")) {
    cell.classList.add("hit");
  } else {
    cell.classList.add("miss");
    infoDisplay.innerText = "A Miss";
  }

  gameDataObject.currentPlayer = "computer";
  //   console.log("gameDataObject at end of shoot the cell", gameDataObject);

  playGame();
}
