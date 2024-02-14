import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});


//* Integration Testing -> Here we test the flow of multiple components i.e. a complete feature where multiple components are included 
describe("Test the Search Functionality in the Body Component", () => {
    it("Should test the search functionality", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            );
        });

        const cardsBeforeSearch = screen.getAllByTestId("restaurantCard");

        expect(cardsBeforeSearch.length).toBe(9);

        const searchInput = screen.getByPlaceholderText("Search Restaurant");

        fireEvent.change(searchInput, { target: { value: "Chi" } });

        const cardsAfterSearch = screen.getAllByTestId("restaurantCard");

        expect(cardsAfterSearch.length).toBe(2);
    });

    it("Should test the Top Rated Restaurant", async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <Body />
                </BrowserRouter>
            );
        });

        const cardsBeforeClickingTopRatedRestaurantBtn = screen.getAllByTestId("restaurantCard");

        expect(cardsBeforeClickingTopRatedRestaurantBtn.length).toBe(9);

        const topRatedRestaurantBtn = screen.getByRole('button', { name: "Top Rated Restaurant" });

        fireEvent.click(topRatedRestaurantBtn);

        const cardsAfterClickingTopRatedRestaurantBtn = screen.getAllByTestId("restaurantCard");

        expect(cardsAfterClickingTopRatedRestaurantBtn.length).toBe(2);
    });
});

//* Some Helper Functions from JEST
/*
beforeAll(() => {
    console.log("Before All");
});

beforeEach(() => {
    console.log("Before Each");
});

afterAll(() => {
    console.log("After All");
});

afterEach(() => {
    console.log("After Each");
});

*/