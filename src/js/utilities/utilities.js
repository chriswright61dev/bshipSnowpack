// some random functions
export function randMAbsolute(multiplier) {
  return Math.abs(Math.floor(Math.random() * multiplier));
}

export function randomDirection() {
  return randMAbsolute(2) ? "horizontal" : "vertical";
}
