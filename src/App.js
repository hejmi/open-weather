import React, { Component } from "react";
import FormInput from "./components/FormInput";
import MyWeather from "./components/MyWeather";

export default class App extends Component {
	getWeather = async (city) => {
		if (!city) city = "gothenburg";
		const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
		const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then((response) => {
			if (response.status === 404) {
				alert("City is not valid");
				throw new Error("Bad response from server");
			}
			return response;
		});

		return await api_call.json();
	};
	state = { weatherData: undefined };

	async componentDidMount(city) {
		try {
			const weatherData = await this.getWeather(city);
			this.setState({
				weatherData: weatherData,
			});
		} catch (e) {
			console.log(e);
		}
	}

	changeCity = (formData) => {
		this.componentDidMount(formData);
	};

	render() {
		if (this.state.weatherData !== undefined) {
			console.log(this.state.weatherData);
			return (
				<div>
					<MyWeather wdata={this.state.weatherData} />
					<FormInput functionCallFromParent={this.changeCity.bind(this)} />
				</div>
			);
		}

		return "";
	}
}
