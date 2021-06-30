// arrays for storing references to grid items

export const playerCellsArray = [];
export const computerCellsArray = [];
export const gridWidth = 12;
export const gridHeight = 12;

// array of objects - relative positions of ships on a grid from a start point
export const shipDataArray = [
  {
    name: "destroyer", // 2 cells
    horizontal: [0, 1],
    vertical: [0, gridWidth],
  },
  {
    name: "submarine", // 3 cells
    horizontal: [0, 1, 2],
    vertical: [0, gridWidth, gridWidth * 2],
  },

  {
    name: "cruiser", // 3 cells
    horizontal: [0, 1, 2],
    vertical: [0, gridWidth, gridWidth * 2],
  },

  {
    name: "battleship", // 4 cells
    horizontal: [0, 1, 2, 3],
    vertical: [0, gridWidth, gridWidth * 2, gridWidth * 3],
  },
  {
    name: "carrier", // 5 cells
    horizontal: [0, 1, 2, 3, 4],
    vertical: [0, gridWidth, gridWidth * 2, gridWidth * 3, gridWidth * 4],
  },
];
