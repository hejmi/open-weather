import React, { Component } from "react";
import { Animate } from "react-simple-animate";

import "./myweather.css";

export class MyWeather extends Component {
	render() {
		const weatherArray = this.props.wdata;
		return (
			<section>
				<div>
					<h1 className="title">iWeather</h1>
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
					<div className="temp-outline">
						<div className="filled-circle"></div>
						<div className="temperature"></div>
					</div>
					<div className="temperature-gradient"> </div>
					<Animate className="temperature" play duration="1" easeType="ease-Out" start={{ marginLeft: "2rem", paddingLeft: 10 }} end={{ marginLeft: "2rem", paddingLeft: weatherArray.main.temp * 3 }}>
						⇪
					</Animate>
				</div>
			</section>
		);
	}
}
export default MyWeather;
