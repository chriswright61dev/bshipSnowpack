export function justChildNodesWithIdArray(parent) {
  console.log("parent.childNodes", parent.childNodes);
  // an array of child nodes
  // includes some text nodes of white space -  2: #text "   "
  //  filter the nodes with no id out
  return Array.from(parent.childNodes).filter((child) => {
    return child.id != undefined;
  });
}
