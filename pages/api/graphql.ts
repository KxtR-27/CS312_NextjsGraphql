import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { resolvers } from "@/graphql/resolver";
import { typeDefs } from "@/graphql/schema";

const server = new ApolloServer({ resolvers, typeDefs });

const handler = startServerAndCreateNextHandler(server);

const allowCors = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
	res.setHeader("Allow", "POST")
		.setHeader("Access-Control-Allow-Origin", "*")
		.setHeader("Access-Control-Allow-Methods", "POST")
		.setHeader("Access-Control-Allow-Headers", "*")
		.setHeader("Access-Control-Allow-Credentials", "true");

	if (req.method === "OPTIONS") res.status(200).end();

	return await fn(req, res);
};

export default allowCors(handler);
