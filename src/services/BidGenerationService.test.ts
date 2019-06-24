jest.mock('../helpers/RandomHelper');
import { generateBids } from './BidGenerationService';
import { randomBetween } from '../helpers/RandomHelper';

describe('the BidGenerationService', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('generates the correct number of bids', () => {
    const expectedNumberOfBids = 100;

    const result = generateBids(5, expectedNumberOfBids);

    expect(result.length).toBe(expectedNumberOfBids);
  });

  it('correctly calls random helper for number of bidders', () => {
    const expectedNumberOfBidders = 5;

    generateBids(expectedNumberOfBidders, 1, 200, 400);
    const randomBetweenCallArgs = randomBetween.mock.calls[0];
    expect(randomBetweenCallArgs[0]).toBe(1);
    expect(randomBetweenCallArgs[1]).toBe(expectedNumberOfBidders);
  });

  it('correctly calls random helper for number of bidders', () => {
    const expectedLowBid = 100;
    const expectedHighBid = 100;

    generateBids(1, 1, expectedLowBid, expectedHighBid);
    const randomBetweenCallArgs = randomBetween.mock.calls[1];
    expect(randomBetweenCallArgs[0]).toBe(expectedLowBid);
    expect(randomBetweenCallArgs[1]).toBe(expectedHighBid);
  });
})