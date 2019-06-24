import { Bid } from '../models/Bid';
import { randomBetween } from '../helpers/RandomHelper';

function generateBids(numberOfBidders: number, numberOfBids: number, lowBid: number = 100, highBid: number = 300): Bid[] {
  // Create Empty Array of Bids
  var bids : Bid[] = [];

  for(let i = 0; i < numberOfBids; i += 1) {
    // Push bid with random price and bidder into array
    bids.push(
      {
        bidderId: `${randomBetween(1, numberOfBidders)}`, 
        price: randomBetween(lowBid, highBid),
    })
  }
  return bids;
}

export { generateBids };