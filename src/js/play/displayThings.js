export const rotateButton = document.querySelector("#rotate_button");

const infoDisplay = document.querySelector("#info_display");
const turnDisplay = document.querySelector("#turn_display");

export function displayInfo(message) {
  infoDisplay.innerHTML = message;
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
