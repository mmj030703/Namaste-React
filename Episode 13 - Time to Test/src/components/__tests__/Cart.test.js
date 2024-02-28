import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Header from "../Header";
import CartPage from "../CartPage";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/restaurantPageMock.json";
import RestaurantPage from "../RestaurantPage";
import { Provider } from "react-redux";
import appStore from '../../utils/store/appStore';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

describe("Testing the Cart Flow", () => {
    it("Should be able to click the Milk Product text Acoordian", async () => {
        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Header />
                        <RestaurantPage />
                    </BrowserRouter>
                </Provider>
            );
        });

        const accordian = screen.getByText("Milk Product (3)");

        fireEvent.click(accordian);

        const menuItems = screen.getAllByTestId("menuItem");

        expect(menuItems.length).toBe(3);
    });

    it("Should Click the addBtn", async () => {
        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <Header />
                        <RestaurantPage />
                    </BrowserRouter>
                </Provider>
            );
        });

        const addBtn = screen.getAllByRole("button", { name: "ADD" });

        fireEvent.click(addBtn[0]);
        fireEvent.click(addBtn[0]);

        const totalCartItems = screen.getByTestId("cartItems");

        expect(totalCartItems).toHaveTextContent("2");
    });

    it("Should check number of items render on Cart Page", async () => {
        await act(async () => {
            render(
                <Provider store={appStore}>
                    <BrowserRouter>
                        <CartPage />
                    </BrowserRouter>
                </Provider>
            );
        });

        const cartItems = screen.getAllByTestId("menuItem");

        expect(cartItems.length).toBe(2);
    });
});