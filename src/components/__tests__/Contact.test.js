import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


//* This file is for testing whether the Contact Component is rendered   

/*
test('Contact Component is loaded', () => {
    render(<Contact />);

    // Querying
    // Returns JSX / React Element
    const heading = screen.getByRole('heading');

    // Assertion
    expect(heading).toBeInTheDocument();
});

test('Check Button is rendered', () => {
    render(<Contact />);

    const button = screen.getByRole('button');

    // Assertion
    expect(button).toBeInTheDocument();
});

test('Input box with placeholder value Name rendered inside the Contact component', () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("Name");

    expect(input).toBeInTheDocument();
});

test('All input boxes are loaded', () => {
    render(<Contact />);

    // Querying
    // Returns an array of JSX / React Element
    const inputBoxes = screen.getAllByRole('textbox');

    // console.log(inputBoxes);         // logs array of React Object / Element
    // console.log(inputBoxes[0]);      // logs first item of array of React Object / Element

    // Way 1
    // expect(inputBoxes.length).toBe(3);

    // Way 2
    expect(inputBoxes.length).not.toBe(4);  // Number of input boxes as of now are two so it should test successfully as inputBoxes length will not be 4 
});

*/

//* We can use it instead of test and it works same as test 
//* We can group mutiple test cases into one based on some category 
describe("Testing the Contact Component", () => {
    it('Contact Component is loaded', () => {
        render(<Contact />);

        // Querying
        // Returns JSX / React Element
        const heading = screen.getByRole('heading');

        // Assertion
        expect(heading).toBeInTheDocument();
    });

    it('Check Button is rendered', () => {
        render(<Contact />);

        const button = screen.getByRole('button');

        // Assertion
        expect(button).toBeInTheDocument();
    });

    test('Input box with placeholder value Name rendered inside the Contact component', () => {
        render(<Contact />);

        const input = screen.getByPlaceholderText("Name");

        expect(input).toBeInTheDocument();
    });

    test('All input boxes are loaded', () => {
        render(<Contact />);

        // Querying
        // Returns an array of JSX / React Element
        const inputBoxes = screen.getAllByRole('textbox');

        // console.log(inputBoxes);         // logs array of React Object / Element
        // console.log(inputBoxes[0]);      // logs first item of array of React Object / Element

        // Way 1
        // expect(inputBoxes.length).toBe(3);

        // Way 2
        expect(inputBoxes.length).not.toBe(4);  // Number of input boxes as of now are two so it should test successfully as inputBoxes length will not be 4 
    });
});

//* We can nest multiple describe into describe and we can have multiple describe blocks 