import {
  infoDisplay,
  turnDisplay,
  rotateButton,
  computerInfoDisplay,
  playerInfoDisplay,
} from "../data/querySelectors";

export function displayInfo(message) {
  infoDisplay.innerHTML = message;
}

export function displayComputerInfo(message) {
  computerInfoDisplay.innerHTML = message;
}

export function displayPlayerInfo(message) {
  playerInfoDisplay.innerHTML = message;
}

export function displayTurn(message) {
  turnDisplay.innerHTML = message;
}

export function hideRotateButton(message) {
  rotateButton.classList.add("hidden");
}

export function showRotateButton(message) {
  rotateButton.classList.remove("hidden");
}
