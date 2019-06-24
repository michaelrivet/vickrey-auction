export function randomBetween(low: number, high: number) : number {
  // If numbers are the same, no need to do calculations.
  if(high === low) return low;

  // Calculate the range to add to the lowest value.
  const range = high - low;

  // Get random value from 0 to Range, then add lowest value.
  return Math.round(Math.random() * range) + low;
}