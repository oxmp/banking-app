import { isValidIBAN } from "../services/card-actions";

test("Test IBAN validity", () => {
  expect(isValidIBAN("DE89370400440532013000")).toBe(true);
  expect(isValidIBAN("1234567890")).toBe(false);
});