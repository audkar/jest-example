import { sum, sumThrows } from "../src/sum"

test('adds 1 + 2 to be 3', () => {
    expect(sum(1, 2)).toBe(1);
});

test('throws error', () => {
    expect(sumThrows()).toBe(1)
});
