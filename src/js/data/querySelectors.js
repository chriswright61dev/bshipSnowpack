// querySelectorAll() returns a static (not live) NodeList

// export const ships = document.querySelectorAll(".ship");
// this one needs to be live

// static querySelectors
export const rotateButton = document.querySelector("#rotate_button");

export const infoDisplay = document.querySelector("#info_display");
export const playerInfoDisplay = document.querySelector("#player_info_display");
export const computerInfoDisplay = document.querySelector(
  "#computer_info_display"
);
export const turnDisplay = document.querySelector("#turn_display");

export const playerGrid = document.querySelector(".grid_player");
export const computerGrid = document.querySelector(".grid_computer");
export const chooseShipsGrid = document.querySelector(".grid_choose_ships");

export const destroyerContainer = document.querySelector(
  ".destroyer_container"
);
export const submarineContainer = document.querySelector(
  ".submarine_container"
);
export const cruiserContainer = document.querySelector(".cruiser_container");
export const battleshipContainer = document.querySelector(
  ".battleship_container"
);
export const carrierContainer = document.querySelector(".carrier_container");
