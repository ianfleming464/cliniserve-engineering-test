import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Cards from "../components/Cards/Cards";
import CardComponent from "../components/Cards/Card/CardComponent";

describe("<Cards /> component", () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<Cards />);
	});

	test("render Cards content container", () => {
		expect(AppWrapper.find(".container")).toHaveLength(1);
	});

	test("render Card component", () => {
		expect(AppWrapper.find(CardComponent)).toHaveLength(3);
	});
});
