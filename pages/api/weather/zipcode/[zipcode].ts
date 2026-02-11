import dbConnect from "@/middleware/db-connect";
import { findByZip } from "@/mongoose/weather/services";
import { NextApiHandler, NextApiResponse } from "next";

dbConnect();

const handler: NextApiHandler = async (req, res): Promise<NextApiResponse<WeatherDetails> | void> => {
	const data = await findByZip(req.query.zipcode as string);
	return res.status(200).json(data);
};

export default handler;
