import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";
import { withHighRatedLabel } from "../RestaurantCard";

it('Should render the Restaurant Card', () => {
    // Passing props
    render(<RestaurantCard restaurantObj={MOCK_DATA} />)

    const cardTitle = screen.getByText('Chinese Wok');

    expect(cardTitle).toBeInTheDocument();
});

//* Testing Higher Order Component (HOC) => withHighRatedLabel
it('Should render the withHighRatedLabel Card', () => {
    const RestaurantCardWithHighRatedLabel = withHighRatedLabel(RestaurantCard);

    render(<RestaurantCardWithHighRatedLabel restaurantObj={MOCK_DATA} />)

    const highRatedLabel = screen.getByText('High Rated');

    expect(highRatedLabel).toBeInTheDocument();
});