// names refactored to personal preference

type WeatherDetails = {
	zipcode: string;
	weather: string;
	temp?: number;
};

interface WeatherQuery {
	zipcode: string;
}
