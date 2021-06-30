export function createBoard(
  gridName,
  cellsArray,
  gridWidth,
  gridHeight,
  idname
) {
  console.log("set up board");
  // cellsArray should be an empty array so empty it to make sure
  cellsArray.length = 0;

  // fill it with the correct number of divs
  for (let i = 0; i < gridWidth * gridHeight; i++) {
    const cell = document.createElement("div");

    // show number in cell for testing
    cell.id = idname + i;
    cell.innerHTML = i;
    cell.classList.add("cell_taken"); // just for testing
    // add classes to cells at the boundaries for crossing tests

    // Boundaries
    //no need for a top Boundary Test
    // this is the start of the bottom row
    const bottomStart = (gridWidth - 1) * gridHeight;
    // bottom Boundary
    if (i >= bottomStart) {
      cell.classList.add("bottom_boundary");
    }
    // no need for a left Boundary Test

    // right Boundary
    if ((i + 1) % gridWidth === 0) {
      cell.classList.add("right_boundary");
    }

    // add it to the grid
    gridName.appendChild(cell);
    // add it to the cells array
    cellsArray.push(cell);
  }
}
