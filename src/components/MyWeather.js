import React, { Component } from "react";
import { Animate } from "react-simple-animate";
import * as Icon from "react-bootstrap-icons";
import "./myweather.css";

export class MyWeather extends Component {
	render() {
		let endColor = "#0000FF";
		let windDirection = "N";
		let weatherArray = this.props.wdata;
		let windDegree = weatherArray.wind.deg;
		let sunRise = new Date(weatherArray.sys.sunrise*1000);
		let sunSet = new Date(weatherArray.sys.sunset*1000);
		let iconCode = weatherArray.weather[0].icon;
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
			default:
				windDirection = "N";
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
							Highest temperature: <strong>{weatherArray.main.temp_max}°C</strong>
							<br />
							Lowest temperature: <strong>{weatherArray.main.temp_min}°C</strong>
						</span>
						<br />
					</p>
					<p>
						Wind:
						<br />
						<strong>
							<span className="wind-p">
								{weatherArray.wind.speed} m/s {windDirection}
							</span>
						</strong>
					</p>
					<Animate
						play
						duration="1"
						easeType="ease-Out"
						start={{
							transform: `rotate(${weatherArray.wind.deg - 90}deg)`,
							width: "12px",
							fontSize: "18px",
							marginLeft: "2.1rem",
							marginTop: "-35px",
						}}
						end={{
							transform: `rotate(${weatherArray.wind.deg}deg)`,
							width: "12px",
							fontSize: "18px",
							marginLeft: "2.1rem",
							marginTop: "-35px",
						}}>
						↑
					</Animate>
					<div className="sun">
						<div className="sunrise-icon"><Icon.Sunrise/></div>
						<div className="sunset-icon"><Icon.SunsetFill/></div>
						<div className="sunrise-time">{sunRise.getHours()}:{sunRise.getMinutes()}</div>
						<div className="sunset-time">{sunSet.getHours()}:{sunRise.getMinutes()}</div>
					</div>
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
				<div className="weather-background" style={{backgroundImage:`url("weather-icons/${iconCode}.jpg")`}} ></div>
			</section>
		);
	}
}
export default MyWeather;
