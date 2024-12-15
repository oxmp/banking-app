import { Card } from "../interfaces/Card";
const { transfer } = require("../services/card-actions")

beforeEach(() => {
  Object.defineProperty(global, 'localStorage', {
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true,
  });
});

test('Transfer test', () => {
  const testCard: Card = {
    balance: 1000,
    history: [],
  };

  const result = transfer(100, testCard, "DE89370400440532013000");

  expect(result.balance).toBe(900);
  expect(localStorage.setItem).toHaveBeenCalledWith(
    "card",
    expect.any(String) 
  );
});
