import config from "../../../Services/config";

export function getRandomLength(length: number): number {
  const rand = Math.random();
  const percentage = (value: number) => Math.floor(length / 100 * value);

  const maxCommonIncrease = percentage(18);
  const minCommonIncrease = percentage(5);

  if (rand < config.SPECIAL_CHANCE) {
    return config.SPECIAL_INCREASE;
  }
  else if (rand < 0.1) {
    return rand < 0.5 ? -2 * minCommonIncrease : 2 * maxCommonIncrease;
  }
  else if (rand < 0.31) {
    return -(Math.floor(Math.random() * (maxCommonIncrease - minCommonIncrease + 1)) + minCommonIncrease);
  }
  else {
    return Math.floor(rand * (maxCommonIncrease - minCommonIncrease + 1)) + minCommonIncrease;
  }
}



// export function getRandomLength(length: number): number {
//   const rand = Math.random(); // Generate a random number between 0 and 1.

//   let x = Math.floor(length / 100 * 18);
//   let y = Math.floor(length / 100 * 5);

//   // 1% chance for -100
//   if (rand < 0.0005) {
//     return 10000;
//   }
//   else if( rand < 0.1) {
//     return Math.random() < 0.5 ? -200: 400;
//   }
//   else if(rand < 0.31) {
//     return -(Math.floor(Math.random() * (x - y + 1)) + y);
//   }
//   else {
//     return Math.floor(rand * (x - y + 1)) + y;
//   }
// }