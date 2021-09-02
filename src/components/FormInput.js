import React, { Component } from "react";

export class FormInput extends Component {
	state = { city: undefined };

	render() {
		return (
			<div className="input-city-form">
				<form>
					<p>Weather at Another Location</p>
					<input type="text" placeholder="Enter City" name="city" id="city" />
					<input type="submit" className="button" value="Check weather" />
				</form>
			</div>
		);
	}
}

export default FormInput;
