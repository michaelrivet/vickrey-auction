jest.mock('./services/AuctionWinnerService');
jest.mock('./services/BidGenerationService');
import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DeterminWinningBidderAndPrice }  from './services/AuctionWinnerService';
import { generateBids } from './services/BidGenerationService';

import { App } from './App';

// Setup Enzyme Adapter
configure({ adapter: new Adapter() });

describe('the App component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).not.toBeNull();
  });

  describe('contains the correct elements', () => {
    it('renders an input for number of bidders', () => {
      const wrapper = shallow(<App />);
      const numberOfBidders = wrapper.find('#NumberOfBids');
      expect(numberOfBidders).not.toBeNull();
    });

    it('renders a submit button', () => {
      const wrapper = shallow(<App />);
      const runButton = wrapper.find('#RunAuction');
      expect(runButton).not.toBeNull();
    });
  });

  describe('performs the correct actions', () => {
    it('calls DeterminWinningBidderAndPrice and generateBids when the button is clicked', () => {
      // Arrange
      const wrapper = shallow(<App />);
      const runButton = wrapper.find('#RunAuction');
      // Mock the return value for services to prevent accessing undefined in app.
      DeterminWinningBidderAndPrice.mockReturnValue({});
      generateBids.mockReturnValue([]);
  
      // Act and Assert
      // Verify that the service has not been called before button click
      expect(DeterminWinningBidderAndPrice.mock.calls.length).toBe(0);
      expect(generateBids.mock.calls.length).toBe(0);
      runButton.simulate('click');
      // Verify that the service was called once after the button click
      expect(DeterminWinningBidderAndPrice.mock.calls.length).toBe(1);
      expect(generateBids.mock.calls.length).toBe(1);
    });
  
    it('changes the number of bids value', () => {
      // Arrange
      const wrapper = shallow(<App />);
      // Mock the return value for service to prevent accessing undefined in app.
      generateBids.mockReturnValue([]);
  
      // Act and Assert
      // Verify that the value is the default value
      expect(wrapper.find('#NumberOfBids').prop('value')).toBe(20);
      wrapper.find('#NumberOfBids').simulate('change', { target: {value: '21'}});
      // Verify that the value has been updated after the change.
      expect(wrapper.find('#NumberOfBids').prop('value')).toBe(21);
    });

    it('does not render more than 1000 bids', () => {
      // Arrange
      const wrapper = shallow(<App />);
      const runButton = wrapper.find('#RunAuction');
      // Mock the return value for generateBids to return 1001 "bids"
      const generatedBids = Array.apply(null, Array(1001)).map(function (x, i) { return {bidderId: 1, price: i}; })
      generateBids.mockReturnValue(generatedBids);

      // Act
      // Verify that the value is the default value
      runButton.simulate('click');
      wrapper.update();
      
      // Assert
      // Verify that the value has been updated after the change.
      expect(wrapper.find('.bidDisplay-bid')).toHaveLength(1000);
    })

    it('renders the winning bid information if it is provided', () => {
      // Arrange
      const wrapper = shallow(<App />);
      const runButton = wrapper.find('#RunAuction');
      // Mock the return value for DeterminWinningBidderAndPrice to return a bid
      DeterminWinningBidderAndPrice.mockReturnValue({bidderId: 'foo', price: 100});
      generateBids.mockReturnValue([]);

      // Act
      // Verify that the value is the default value
      runButton.simulate('click');
      wrapper.update();

      // Assert
      // Verify that the value has been updated after the change.
      const winningBid = wrapper.find('.bidDisplay-winningBid');
      expect(winningBid).not.toBeNull();
      expect(winningBid.text()).toBe("Winning Bidder: foo - Price Paid: 100");
    })
  });
});
