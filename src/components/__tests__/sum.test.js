import { sum } from "../sum";

test('Sum function should calculate the sum of two numbers', () => {
    const result = sum(5, 3);

    // Assertion
    expect(result).toBe(8);
});