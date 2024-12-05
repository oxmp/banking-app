const { Card } = require("../interfaces/Card");
const { deposit } = require("../services/card-actions")

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

test('Deposit test', () => {
  const testCard: typeof Card = {
    balance: 1000,
    history: [],
  };

  const result = deposit(100, testCard);

  expect(result.balance).toBe(1100);
  expect(localStorage.setItem).toHaveBeenCalledWith(
    "card",
    expect.any(String) 
  );
});
