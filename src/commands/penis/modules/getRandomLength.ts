export function getRandomLength(length: number): number {
  const rand = Math.random(); // Generate a random number between 0 and 1.

  let x = Math.floor(length / 100 * 18);
  let y = Math.floor(length / 100 * 5);

  // 1% chance for -100
  if (rand < 0.0005) {
    return 10000;
  }
  else if( rand < 0.1) {
    return Math.random() < 0.5 ? -200: 400;
  }
  else if(rand < 0.31) {
    return -(Math.floor(Math.random() * (x - y + 1)) + y);
  }
  else {
    return Math.floor(rand * (x - y + 1)) + y;
  }
}