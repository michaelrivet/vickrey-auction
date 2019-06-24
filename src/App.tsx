import * as React from 'react';
import { Bid } from './models/Bid';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { generateBids } from './services/BidGenerationService';
import { DeterminWinningBidderAndPrice } from './services/AuctionWinnerService';

import './_app.css';

/** 
 * There are no properties in the main application: nobody passes it anything. 
 */
type AppProperties = { }

/** 
 * The entry point of the application.  
 */
export const App: React.SFC<AppProperties> = () => {
  const [ bids, setBids ] = React.useState([] as Bid[]);
  const [ winningBid, setWinningBid ] = React.useState({} as Bid);
  const [ numberOfBidders, setNumberOfBidders ] = React.useState(5);
  const [ numberOfBids, setNumberOfBids ] = React.useState(20);
  const [ lowestBidPrice, setLowestBidPrice ] = React.useState(90);
  const [ highestBidPrice, setHighestBidPrice ] = React.useState(200);
  const [ auctionReservePrice, setAuctionReservePrice ] = React.useState(140);

  const handleRunAuctionClick = () => {
    const generatedBids = generateBids(numberOfBidders, numberOfBids, lowestBidPrice, highestBidPrice);
    const winningBid = DeterminWinningBidderAndPrice(auctionReservePrice, generatedBids);
    setWinningBid(winningBid);
    setBids(generatedBids);
  };

  return (
    <React.Fragment>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">Vickery Auction Simulator!</Typography>
            <Link href="https://github.com/michaelrivet/vickrey-auction" color="inherit">View on Github</Link>
          </Toolbar>
        </AppBar>
      </Container>
      <Container>
        <TextField
          label="Number of Bidders"
          value={numberOfBidders}
          onChange={e => setNumberOfBidders(+e.target.value)}
          type="number"
        />
        <TextField
          id="NumberOfBids"
          label="Number of Bids"
          value={numberOfBids}
          onChange={e => setNumberOfBids(+e.target.value)}
          type="number"
        />
        <TextField
          label="Lowest Bid Price"
          value={lowestBidPrice}
          onChange={e => setLowestBidPrice(+e.target.value)}
          type="number"
        />
        <TextField
          label="Highest Bid Price"
          value={highestBidPrice}
          onChange={e => setHighestBidPrice(+e.target.value)}
          type="number"
        />
        <TextField
          label="Auction Reserve Price"
          value={auctionReservePrice}
          onChange={e => setAuctionReservePrice(+e.target.value)}
          type="number"
        />
      </Container>
      <Container>
        <Button id="RunAuction" variant="contained" color="primary" onClick={handleRunAuctionClick}>Simulate Random Auction</Button>
      </Container>
      <Container className="bidDisplay">
        {
          !!winningBid.bidderId && <div className="bidDisplay-winningBid">{`Winning Bidder: ${winningBid.bidderId} - Price Paid: ${winningBid.price}`}</div>
        }
        {
          bids.slice(0, 1000).map((bid, iter) => (<div className="bidDisplay-bid" key={iter}>{`${bid.bidderId} : ${bid.price}`}</div>))
        }
      </Container>
    </React.Fragment>
  )
}