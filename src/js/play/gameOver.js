import { gameDataObject } from "../data/data";
import { setup } from "../setup/setup";
export function gameOver() {
  console.log("in game over");
  gameDataObject.isGameOver = true;

  setup();
}
