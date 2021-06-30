import { playerShipsDisplay } from "./playerShipsSetup";

export function rotatePlayerShips() {
  const destroyerContainer = document.querySelector(".destroyer_container");
  const submarineContainer = document.querySelector(".submarine_container");
  const cruiserContainer = document.querySelector(".cruiser_container");
  const battleshipContainer = document.querySelector(".battleship_container");
  const carrierContainer = document.querySelector(".carrier_container");

  console.log("rotating the player ships ");

  //   if (playerShipsDisplay === "horizontal")
  if (playerShipsDisplay.direction === "horizontal") {
    console.log("horizontal");

    // add vertical class to toggle whether is horizontal
    // vertical class is after container class in the css stack

    destroyerContainer.classList.add("destroyer_container_vertical");
    submarineContainer.classList.add("submarine_container_vertical");
    cruiserContainer.classList.add("cruiser_container_vertical");
    battleshipContainer.classList.add("battleship_container_vertical");
    carrierContainer.classList.add("carrier_container_vertical");
    playerShipsDisplay.direction = "vertical";
    return; // or next if will fire
  }
  //   if (playerShipsDisplay === "vertical")
  if (playerShipsDisplay.direction === "vertical") {
    console.log("vertical");
    // remove the classes and go back to horizontal
    destroyerContainer.classList.remove("destroyer_container_vertical");
    submarineContainer.classList.remove("submarine_container_vertical");
    cruiserContainer.classList.remove("cruiser_container_vertical");
    battleshipContainer.classList.remove("battleship_container_vertical");
    carrierContainer.classList.remove("carrier_container_vertical");

    playerShipsDisplay.direction = "horizontal";
    return;
  }
  console.log("late return");
}
