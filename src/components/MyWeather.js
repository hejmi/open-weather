import React, { Component } from "react";

export class MyWeather extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const weatherArray = this.props.wdata;
		return (
			<div>
				<h1>Your Weather</h1>
				<p>
					Latitud: {weatherArray.coord.lat}
					<br />
				</p>
				<p>
					Longitude: {weatherArray.coord.lon}
					<br />
				</p>
				<p>
					Temperature: {weatherArray.main.temp}°C
					<br />
				</p>
			</div>
		);
	}
}

export default MyWeather;
