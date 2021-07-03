export function makeGridContainer(gridData) {
  const container = document.createElement("div");
  container.className = "grid_container";
  makeInnerDiv(
    container,
    gridData.mainGridClassName,
    gridData.gridClassName1,
    gridData.subElementsArray1
  );
  makeInnerDiv(
    container,
    gridData.mainGridClassName,
    gridData.gridClassName2,
    gridData.subElementsArray2
  );
  // document.body.appendChild(container);

  document.body.append(container);
}

function makeInnerDiv(parent, mainClassName, otherClassName, subElementsArray) {
  const innerDiv = document.createElement("div");
  const classNames = `${mainClassName} ${otherClassName}`;
  const trimmedClassNames = classNames.trim();
  innerDiv.className = trimmedClassNames;
  if (subElementsArray) {
    subElementsArray.forEach((element, index) => {
      const subElement = makeElementWithId(subElementsArray[index]);
      innerDiv.appendChild(subElement);
    });
  }
  parent.appendChild(innerDiv);
}

function makeElementWithId(dataObject) {
  const myElement = document.createElement(dataObject.type);
  myElement.id = dataObject.elementId;
  if (dataObject.message) {
    myElement.innerText = dataObject.message;
  }
  return myElement;
}
