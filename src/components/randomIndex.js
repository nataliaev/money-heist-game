export default function randomIndex(dataLength) {
  if (dataLength < 1 || dataLength === undefined) return -1;

  return Math.floor(Math.random() * dataLength);
}