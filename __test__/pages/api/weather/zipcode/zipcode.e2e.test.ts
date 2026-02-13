/**
 * @jest-environment node
 */

describe("The API /weather/zipcode/[zipcode]", () => {
	test("returns the correct data for zip 96815", async () => {
		const zip = "96815";
		const url = `http://localhost:3000/api/weather/zipcode/${zip}`;

		const body = await fetch(url).then(response => response.json());

		expect(body.zip).toEqual(zip);
	});
});

export {};
