export const a: string = "abcd";

/**
 * Simulates a coin toss and returns the result.
 * @returns {boolean} - The result of the coin toss. `true` for "heads" and `false` for "tails".
 */
export function coinToss() {
  return Math.random() > 0.5;
}
