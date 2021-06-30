import React from "react";
import ReactDom from "react-dom";
import axios from "axios";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	async componentDidMount() {
		const response = await axios.get("https://api.corona-zahlen.org/germany");
		this.setState({ data: response.data });
	}

	render() {
		const { cases, deaths } = this.state.data;
		return (
			<>
				<div className='App'>
					<h1>First data test:</h1>
					<h4>Cases: {cases}</h4>
					<h4>Deaths: {deaths}</h4>
				</div>
			</>
		);
	}
}
