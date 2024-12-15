import { Card } from "../interfaces/Card";
const { withdraw } = require("../services/card-actions")

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

test('Withdraw test', () => {
  const testCard: Card = {
    balance: 1000,
    history: [],
  };

  const result = withdraw(100, testCard);

  expect(result.balance).toBe(900);
  expect(localStorage.setItem).toHaveBeenCalledWith(
    "card",
    expect.any(String) 
  );
});
