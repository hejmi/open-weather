import React, { Component } from "react";

export class FormInput extends Component {
	updateCity = (city) => {
		city.preventDefault();
		this.props.functionCallFromParent(this.state.city);
	};

	handleInputChange = (event) => this.setState({ [event.target.name]: event.target.value });

	render() {
		return (
			<div className="input-city-form">
				<form>
					<p>Weather at Another Location</p>
					<input type="text" placeholder="Enter City" name="city" id="city" onChange={this.handleInputChange} />
					<input type="submit" className="button" value="Check weather" onClick={this.updateCity.bind(this)} />
				</form>
			</div>
		);
	}
}

export default FormInput;
