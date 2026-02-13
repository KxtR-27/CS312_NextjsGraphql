import { sum } from "../../helpers/sum";

describe("the sum function", () => {
	test("2 + 2 = 4", () => {
		expect(sum([2, 2])).toBe(4);
	});

	test("-8 + 4 = -4", () => {
		expect(sum([-8, 4])).toBe(-4);
	});

	test("-8 + 4 = -4", () => {
		expect(sum([2, 2, -4])).toBe(0);
	});
});
