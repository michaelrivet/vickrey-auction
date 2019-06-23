import { Bid } from '../models/Bid';
import { DeterminWinningBidderAndPrice } from './AuctionWinnerService';

describe('the DeterminWinningBidderAndPrice function', () => {
  it('returns null as the winning bidder if no bids above reserve price', () => {
    const bids: Bid[] = [
      { bidderId: 'A', price: 90 },
      { bidderId: 'B', price: 90 },
      { bidderId: 'C', price: 90 },
    ];
    
    const result = DeterminWinningBidderAndPrice(100, bids);

    expect(result.bidderId).toBeNull();
  });

  it('returns the reserve price if only one bidder is above the reserve price', () => {
    const reservePrice = 100;

    const bids: Bid[] = [
      { bidderId: 'A', price: 120 },
      { bidderId: 'A', price: 110 },
      { bidderId: 'B', price: 90 },
      { bidderId: 'C', price: 90 },
    ];
    
    const result = DeterminWinningBidderAndPrice(reservePrice, bids);

    expect(result.bidderId).toBe('A');
    expect(result.price).toBe(reservePrice);
  });

  it('returns the highest bidder id if multiple bids above reserve price', () => {
    
    const bids: Bid[] = [
      { bidderId: 'A', price: 120 },
      { bidderId: 'B', price: 110 },
      { bidderId: 'C', price: 130 },
    ];
    
    const result = DeterminWinningBidderAndPrice(100, bids);

    expect(result.bidderId).toBe('C');
  });

  it('returns the highest price from the non-winning buyer id if multiple bids above reserve price', () => {
    
    const bids: Bid[] = [
      { bidderId: 'A', price: 130 },
      { bidderId: 'A', price: 140 },
      { bidderId: 'B', price: 110 },
      { bidderId: 'C', price: 120 },
    ];
    
    const result = DeterminWinningBidderAndPrice(100, bids);

    expect(result.price).toBe(120);
  });

  test('if two bidders place the same highest bid, it returns the first bidder seen', () => {
    
    const bids: Bid[] = [
      { bidderId: 'A', price: 130 },
      { bidderId: 'A', price: 140 },
      { bidderId: 'B', price: 110 },
      { bidderId: 'C', price: 140 },
    ];
    
    const result = DeterminWinningBidderAndPrice(100, bids);

    expect(result.bidderId).toBe('A');
    expect(result.price).toBe(140);
  });

  it('correctly returns the expected result from the example test case', () => {
    const bids: Bid[] = [
      { bidderId: 'A', price: 110 },
      { bidderId: 'A', price: 130 },
      // No Bids from "B"
      { bidderId: 'C', price: 125 },
      { bidderId: 'D', price: 105 },
      { bidderId: 'D', price: 115 },
      { bidderId: 'D', price: 90 },
      { bidderId: 'E', price: 132 },
      { bidderId: 'E', price: 135 },
      { bidderId: 'E', price: 140 },
    ];
    
    const result = DeterminWinningBidderAndPrice(100, bids);

    expect(result.bidderId).toBe('E');
    expect(result.price).toBe(130);
  });

})

