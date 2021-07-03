import { gameDataObject } from "../data/data";
import { setup } from "../setup/setup";
export function gameOver() {
  gameDataObject.isGameOver = true;
  setup();
}
