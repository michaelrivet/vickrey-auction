import { Bid } from '../models/Bid';

function DeterminWinningBidderAndPrice(floor: number, bids: Bid[]): Bid {
  // Set highest and second highest bids to be bids without a bidder at the floor price.
  // This will allow us to easily filter out bids below the floor price.
  let highestBid: Bid = {
    bidderId: null,
    price: floor,
  };
  let secondHighestBid = highestBid;

  // Loop through each bid.
  bids.forEach( bid => {
    // First check and see if this bid's price is higher than the current highest bid.
    if (bid.price > highestBid.price) {
      // If this is a bid from a new person, make the current highest bid the second highest bid.
      if (bid.bidderId !== highestBid.bidderId) {
        secondHighestBid = highestBid;
      }
      highestBid = bid;
    } else if (bid.price > secondHighestBid.price && bid.bidderId != highestBid.bidderId) {
      // If this bid's price is higher than the current second highest bid and the bidder is not the same as the highest bid,
      // set the second highest bid to the current bid.
      secondHighestBid = bid;
    }
  });

  // Return a new bid object containing the highest bidder and the price from the second highest bid.
  return {
    bidderId: highestBid.bidderId,
    price: secondHighestBid.price,
  };
}

export { DeterminWinningBidderAndPrice };