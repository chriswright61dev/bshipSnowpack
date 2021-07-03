import { gameDataObject } from "../data/data";
import { playGame } from "./playGame";
import { displayPlayerInfo } from "../utilities/displayThings";
export function shootTheCell(cell) {
  if (cell.classList.contains("tested")) {
    console.log("already done this one - try again");
    playGame();
  } else {
    cell.classList.add("tested");
    if (cell.classList.contains("destroyer")) {
      gameDataObject.DestroyerCellsShotbyPlayer++;
      console.log("destroyer hit");
      displayPlayerInfo("A Hit");
    }
    if (cell.classList.contains("submarine")) {
      console.log("submarine hit");
      displayPlayerInfo("A Hit");
      gameDataObject.SubmarineCellsShotbyPlayer++;
    }
    if (cell.classList.contains("cruiser")) {
      console.log("cruiser hit");
      displayPlayerInfo("A Hit");
      gameDataObject.CruiserCellsShotbyPlayer++;
    }
    if (cell.classList.contains("battleship")) {
      console.log("battleship hit");
      displayPlayerInfo("A Hit");
      gameDataObject.BattleshipCellsShotbyPlayer++;
    }
    if (cell.classList.contains("carrier")) {
      console.log("carrier hit");
      displayPlayerInfo("A Hit");
      gameDataObject.CarrierCellsShotbyPlayer++;
    }
  }

  if (cell.classList.contains("cell_taken")) {
    cell.classList.add("hit");
  } else {
    cell.classList.add("miss");
    displayPlayerInfo("A Miss");
  }

  gameDataObject.currentPlayer = "computer";

  playGame();
}
