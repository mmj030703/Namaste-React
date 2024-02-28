import { fireEvent, render, screen } from "@testing-library/react";
import Header from '../Header'
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it('Should render the Header Component with login button', () => {
    // Render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Querying
    const loginBtn = screen.getByRole('button', { name: "Login" });

    // Assertion
    expect(loginBtn).toBeInTheDocument();
});


it('Should render the Header Component with login button', () => {
    // Render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Querying
    const cartButton = screen.getByTestId('cart-icon')

    // Assertion
    expect(cartButton).toBeInTheDocument();
});

it('Should change Login button to Logout Button on Click', () => {
    // Render
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Querying
    const loginBtn = screen.getByRole('button', { name: "Login" });

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole('button', { name: "Logout" });

    // Assertion
    expect(logoutBtn).toBeInTheDocument();
});