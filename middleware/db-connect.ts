import { storeDocument } from "../mongoose/weather/services";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

const dbConnect = async (): Promise<any | string> => {
	const mongoServer = await MongoMemoryServer.create();
	const MONGOIO_URI = mongoServer.getUri();
	await mongoose.disconnect();

	await mongoose.connect(MONGOIO_URI, { dbName: "Weather" });

	(await storeDocument({
		zip: "96815",
		weather: "sunny",
		tempC: "20C",
		tempF: "70F",
		friends: ["96814", "96826"],
	}),
		await storeDocument({
			zip: "96826",
			weather: "sunny",
			tempC: "25C",
			tempF: "86F",
			friends: ["96815", "96814"],
		}),
		await storeDocument({
			zip: "96814",
			weather: "sunny",
			tempC: "20C",
			tempF: "68F",
			friends: ["96815", "96826"],
		}));

	return mongoServer;
};

export default dbConnect;
