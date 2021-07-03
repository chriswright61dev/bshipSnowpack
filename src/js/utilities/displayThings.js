// import {
// infoDisplay,
// turnDisplay,
// rotateButton,
// computerInfoDisplay,
// playerInfoDisplay,
// } from "../data/querySelectors";

export function displayInfo(message) {
  const infoDisplay = document.querySelector("#info_display");
  infoDisplay.innerText = message;
}

export function displayComputerInfo(message) {
  const computerInfoDisplay = document.querySelector("#computer_info_display");
  computerInfoDisplay.innerText = message;
}

export function displayPlayerInfo(message) {
  const playerInfoDisplay = document.querySelector("#player_info_display");
  playerInfoDisplay.innerText = message;
}

export function displayTurn(message) {
  const turnDisplay = document.querySelector("#turn_display");
  turnDisplay.innerText = message;
}

export function hideRotateButton(message) {
  const rotateButton = document.querySelector("#rotate_button");
  rotateButton.classList.add("hidden");
}

export function showRotateButton(message) {
  const rotateButton = document.querySelector("#rotate_button");
  rotateButton.classList.remove("hidden");
}
