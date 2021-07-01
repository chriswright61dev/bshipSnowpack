// basic data
export const gridWidth = 12;
export const gridHeight = 12;

// arrays for storing references to grid items

export const playerCellsArray = [];
export const computerCellsArray = [];

// state data of dragged ships
export const playerShipsDisplay = { direction: "horizontal" };

export let draggedItems = {
  draggedShip: null,
  draggedShipLength: 0,
  selectedShipNameWithIndex: "",
};

// array of objects - relative positions of ships on a grid from a start point
export const shipDataArray = [
  {
    name: "destroyer",
    size: 2, // 2 cells
    horizontal: [0, 1],
    vertical: [0, gridWidth],
  },
  {
    name: "submarine", // 3 cells
    size: 3,
    horizontal: [0, 1, 2],
    vertical: [0, gridWidth, gridWidth * 2],
  },

  {
    name: "cruiser", // 3 cells
    size: 3,
    horizontal: [0, 1, 2],
    vertical: [0, gridWidth, gridWidth * 2],
  },

  {
    name: "battleship", // 4 cells
    size: 4,
    horizontal: [0, 1, 2, 3],
    vertical: [0, gridWidth, gridWidth * 2, gridWidth * 3],
  },
  {
    name: "carrier", // 5 cells
    size: 5,
    horizontal: [0, 1, 2, 3, 4],
    vertical: [0, gridWidth, gridWidth * 2, gridWidth * 3, gridWidth * 4],
  },
];

export const gameDataObject = {
  isGameOver: false,
  currentPlayer: "player",
  infoDisplay: "Place your ships on the grid",
  turnDisplay: "",
  DestroyerSunkbyPlayer: false,
  SubmarineSunkbyPlayer: false,
  CruiserSunkbyPlayer: false,
  BattleshipSunkbyPlayer: false,
  CarrierSunkbyPlayer: false,

  DestroyerCellsShotbyPlayer: 0,
  SubmarineCellsShotbyPlayer: 0,
  CruiserCellsShotbyPlayer: 0,
  BattleshipCellsShotbyPlayer: 0,
  CarrierCellsShotbyPlayer: 0,

  DestroyerSunkbyComputer: false,
  SubmarineSunkbyComputer: false,
  CruiserSunkbyComputer: false,
  BattleshipSunkbyComputer: false,
  CarrierSunkbyComputer: false,

  DestroyerCellsShotbyComputer: 0,
  SubmarineCellsShotbyComputer: 0,
  CruiserCellsShotbyComputer: 0,
  BattleshipCellsShotbyComputer: 0,
  CarrierCellsShotbyComputer: 0,
};
