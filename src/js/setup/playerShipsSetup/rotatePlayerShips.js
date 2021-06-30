import { playerShipsDisplay } from "./playerShipsSetup";

export function rotatePlayerShips() {
  const destroyerContainer = document.querySelector(".destroyer_container");
  const submarineContainer = document.querySelector(".submarine_container");
  const cruiserContainer = document.querySelector(".cruiser_container");
  const battleshipContainer = document.querySelector(".battleship_container");
  const carrierContainer = document.querySelector(".carrier_container");

  if (playerShipsDisplay.direction === "horizontal") {
    // add the vertical classes - after the horizontal in the css stack
    if (destroyerContainer) {
      destroyerContainer.classList.add("destroyer_container_vertical");
    }
    if (submarineContainer) {
      submarineContainer.classList.add("submarine_container_vertical");
    }
    if (cruiserContainer) {
      cruiserContainer.classList.add("cruiser_container_vertical");
    }
    if (battleshipContainer) {
      battleshipContainer.classList.add("battleship_container_vertical");
    }
    if (carrierContainer) {
      carrierContainer.classList.add("carrier_container_vertical");
    }

    playerShipsDisplay.direction = "vertical";
    return; // or next if will fire
  }
  //   if (playerShipsDisplay === "vertical")
  if (playerShipsDisplay.direction === "vertical") {
    // remove the classes and go back to horizontal

    // cannot add classes to removed items

    if (destroyerContainer) {
      destroyerContainer.classList.remove("destroyer_container_vertical");
    }
    if (submarineContainer) {
      submarineContainer.classList.remove("submarine_container_vertical");
    }
    if (cruiserContainer) {
      cruiserContainer.classList.remove("cruiser_container_vertical");
    }
    if (battleshipContainer) {
      battleshipContainer.classList.remove("battleship_container_vertical");
    }
    if (carrierContainer) {
      carrierContainer.classList.remove("carrier_container_vertical");
    }

    playerShipsDisplay.direction = "horizontal";
    return;
  }
}
