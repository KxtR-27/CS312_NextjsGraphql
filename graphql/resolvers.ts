import { findByZip, updateByZip } from "@/mongoose/weather/services";

interface WeatherInterface {
	zip: string;
	weather: string;
	tempC: string;
	tempF: string;
	friends: string[];
}

export const resolvers = {
	Query: {
		weather: async (_: unknown, param: WeatherInterface) => {
			return [await findByZip(param.zip)];
		},
	},
	Mutation: {
		weather: async (_: unknown, param: { data: WeatherInterface }) => {
			await updateByZip(param.data.zip, param.data);
			return [await findByZip(param.data.zip)];
		},
	},
};
