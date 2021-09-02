import React, { Component } from "react";
import MyWeather from "./components/MyWeather";
import weatherApi from "./weather_api";

export default class App extends Component {
	getWeather = async () => {
		const city = "gothenburg";
		const apiKey = weatherApi;
		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
		return await api_call.json();
	};
	state = { weatherData: undefined };

	async componentDidMount() {
		try {
			const weatherData = await this.getWeather();
			this.setState({
				weatherData: weatherData,
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		if (this.state.weatherData !== undefined) {
			console.log(this.state.weatherData);
			return <MyWeather wdata={this.state.weatherData} />;
		}

		return "";
	}
}
