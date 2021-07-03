import { makeGridContainer } from "./makeGridContainer";
export function htmlSetup() {
  const container1Data = {
    mainGridClassName: "grid",
    gridClassName1: "grid_player",
    gridClassName2: "grid_computer",
    subElementsArray1: null,
    subElementsArray2: null,
  };

  const container2Data = {
    mainGridClassName: "",
    gridClassName1: "grid_choose_ships",
    gridClassName2: "info_controls",
    subElementsArray1: null,
    subElementsArray2: [
      {
        type: "h3",
        elementId: "info_display",
        message: "Drag your ships onto the board",
      },
      {
        type: "h3",
        elementId: "player_info_display",
        message: "",
      },
      {
        type: "h3",
        elementId: "computer_info_display",
        message: "",
      },
      {
        type: "h3",
        elementId: "turn_display",
        message: "",
      },
      {
        type: "button",
        elementId: "rotate_button",
        message: "Rotate Ships",
      },
    ],
  };

  makeGridContainer(container1Data);
  makeGridContainer(container2Data);

  console.log("document.body", document.body);
  console.log("Document.body", Document.body);
}
