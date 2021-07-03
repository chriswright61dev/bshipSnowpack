// import { infoControls } from "../../../data/querySelectors";

// console.log("document.body", document.body);

function addInnerHtml(message) {}

export function makeInfoElements() {
  const infoControls = document.querySelector(".info_controls");

  console.log("infoControls", infoControls);
  makeElementWithId("h3", infoControls, "info_display");
  makeElementWithId("h3", infoControls, "player_info_display");
  makeElementWithId("h3", infoControls, "computer_info_display");
  makeElementWithId("h3", infoControls, "turn_display");
  makeElementWithId("button", infoControls, "rotate_button");
}
