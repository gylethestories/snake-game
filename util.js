export function getRandom(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  return parseInt(Math.random() * (max - min)) + min;
}
