export function obrezLength(length1: number, length2: number): { winnerNum: number } {
  const totalLength = length1 + length2;
  const chance1 = length1 / totalLength; // Chance of length1 being the winner

  if (Math.random() > chance1) {
    return {
      winnerNum: 1,
    };
  } else {
    return {
      winnerNum: 2,
    };
  }
}