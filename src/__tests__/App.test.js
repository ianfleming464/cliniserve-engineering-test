import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Cards from "../components/Cards/Cards";

describe("<App /> component", () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<App />);
	});

	test("render App content container", () => {
		expect(AppWrapper.find(".container")).toHaveLength(1);
	});

	test("render Cards component", () => {
		expect(AppWrapper.find(Cards)).toHaveLength(1);
	});

	test("correct number of cards rendered", () => {
		expect(AppWrapper.children()).toHaveLength(Cards.length);
	});

	test("vaccinations to render", () => {
		expect(AppWrapper.find(".vaxBox")).toHaveLength(1);
	});
});
