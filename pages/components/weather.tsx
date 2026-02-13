import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const PageComponentWeather: NextPage = () => {
	interface WeatherProps {
		weather: string;
	}

	const WeatherComponent = ({ weather }: WeatherProps) => {
		const [count, setCount] = useState(0);

		useEffect(() => {
			setCount(1);
		}, []);

		return (
			<h1 onClick={() => setCount(count + 1)}>
				The weather is {weather}, and the counter shows {count}
			</h1>
		);
	};

	return (
		<>
            <Head>
				<title>Weather Page</title>
				<meta property="og:title" content="Weather" key="title" />
			</Head>
			<WeatherComponent weather="sunny" />
		</>
	);
};

export default PageComponentWeather;
