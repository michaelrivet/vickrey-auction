import { randomBetween } from './RandomHelper'


describe('the randomBetween function', () => {
  let defaultGlobalMath;

  beforeAll(() => {
    // Store default global Math to reset when tests are done
    defaultGlobalMath = global.Math;
  });

  afterAll(() => {
    // Restore default global Math after tests are done.
    global.Math = defaultGlobalMath;
  });

  it('0 if both low and high are 0', () => {
    const result = randomBetween(0, 0);

    expect(result).toBe(0);
  });

  it('a constant value if both high and low are the same', () => {
    const result = randomBetween(2, 2);
  
    expect(result).toBe(2);
  });

  it('returns the low value if randomly rolling a zero', () => {
    // Mock Math.random to always return 0
    // This will ensure we get the lowest possible "random" number.
    _setUpMockMath(0);
    const expectedLow = 10;
    const result = randomBetween(expectedLow, 100);
  
    expect(result).toEqual(expectedLow);
  });

  it('returns the high value if randomly rolling a one', () => {
    // Mock Math.random to always return 1
    // This will ensure we get the highest possible "random" number.
    _setUpMockMath(1);
    const expectedHigh = 10;
    const result = randomBetween(0, expectedHigh);
  
    expect(result).toEqual(expectedHigh);
  });

  const _setUpMockMath = (randomReturnValue: number) => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => randomReturnValue;
    global.Math = mockMath;
  }
})