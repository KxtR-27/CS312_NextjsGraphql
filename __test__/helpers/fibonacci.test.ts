import { fibonacci } from "../../helpers/fibonacci";
jest.mock("../../helpers/sum");

describe("the fibonacci sequence", () => {
	test("with length of 0 should be ''", () => {
		expect(fibonacci(0)).toBe("");
	});

	// unmocked - could break if sum changes
	//test("with length of 5 should be '0, 1, 1, 2, 3'", () => {
	//	  expect(fibonacci(5)).toBe("0, 1, 1, 2, 3");
	//});

	// with sum.ts mocked as stub
	//test("with length of 5 should be called five times", () => {
	//	  expect(fibonacci(5)).toBe("999, 999, 999, 999, 999");
	//});

	// with sum.ts mocked as a fake (the original test, but can't break)
	//test("with length of 5 should be '0, 1, 1, 2, 3'", () => {
	//    expect(fibonacci(5)).toBe("0, 1, 1, 2, 3");
	//});

	// with a true mock of sum.ts (the original test, but can't break, and with total control)
	test("with length of 5 should be '0, 1, 1, 2, 3'", () => {
		expect(fibonacci(5)).toBe("0, 1, 1, 2, 3");
	});
});
