import React, { Component } from "react";
import { Animate } from "react-simple-animate";

import "./myweather.css";

export class MyWeather extends Component {
	render() {
		let endColor = "#0000FF";
		let windDirection = "N";
		const weatherArray = this.props.wdata;
		let windDegree = weatherArray.wind.deg;
		switch (true) {
			case windDegree === 0:
			case windDegree === 360:
				windDirection = "N";
				break;
			case windDegree <= 89:
				windDirection = "NE";
				break;
			case windDegree === 90:
				windDirection = "E";
				break;
			case windDegree <= 179:
				windDirection = "SE";
				break;
			case windDegree === 180:
				windDirection = "S";
				break;
			case windDegree <= 269:
				windDirection = "SW";
				break;
			case windDegree === 270:
				windDirection = "W";
				break;
			case windDegree <= 359:
				windDirection = "NW";
				break;
		}
		if (weatherArray.main.temp >= 15) endColor = "#FFCC00";
		if (weatherArray.main.temp >= 25) endColor = "#FF0000";
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
						<br />
						<span className="smaller">
							Todays highest temperature: <strong>{weatherArray.main.temp_max}°C</strong>
							<br />
							Todays lowest temperature: <strong>{weatherArray.main.temp_min}°C</strong>
						</span>
						<br />
					</p>
					<p>
						Wind:
						<br />
						<strong>
							{weatherArray.wind.speed} {windDirection}
						</strong>
					</p>
					<div className="temp-outline">
						<Animate
							play
							duration="1"
							easeType="ease-Out"
							start={{
								position: "absolute",
								left: "15px",
								bottom: "15px",
								width: "50px",
								height: "50px",
								borderRadius: "50px",
								backgroundColor: "#0000FF",
							}}
							end={{
								position: "absolute",
								left: "15px",
								bottom: "15px",
								width: "50px",
								height: "50px",
								borderRadius: "50px",
								backgroundColor: endColor,
							}}></Animate>
						<Animate
							play
							duration="1"
							easeType="ease-Out"
							start={{
								position: "absolute",
								left: "30px",
								bottom: "50px",
								height: "30px",
								width: "20px",
								backgroundColor: "#0000FF",
								borderRadius: "50px",
							}}
							end={{
								position: "absolute",
								left: "30px",
								bottom: "50px",
								height: weatherArray.main.temp * 4,
								width: "20px",
								backgroundColor: endColor,
								borderRadius: "50px",
							}}></Animate>
					</div>
				</div>
			</section>
		);
	}
}
export default MyWeather;
