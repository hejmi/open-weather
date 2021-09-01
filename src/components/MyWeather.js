import React, { Component } from "react";
import { Animate } from "react-simple-animate";

import "./myweather.css";

export class MyWeather extends Component {
	render() {
		const weatherArray = this.props.wdata;
		const paddingLeft = { marginLeft: "2rem", paddingLeft: weatherArray.main.temp * 3 };
		return (
			<section>
				<div>
					<h1 className="title">Your Weather</h1>
					<p>
						<strong>{weatherArray.name}</strong>
						<br />
						<span className="smaller">
							@lat:{weatherArray.coord.lat}, lng:{weatherArray.coord.lon}
						</span>
						<br />
					</p>
					<p>
						Temp now:
						<br />
						<strong>{weatherArray.main.temp}°C</strong> <span className="smaller">(feels like {weatherArray.main.feels_like}°C)</span>
						<br />
					</p>
					<div className="temperature-gradient"> </div>
					<div className="temperature-arrow" style={paddingLeft}>
						⇪
					</div>
				</div>
			</section>
		);
	}
}

export default MyWeather;
