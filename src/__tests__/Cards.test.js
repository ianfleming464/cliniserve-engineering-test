import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Cards from "../components/Cards/Cards";

describe("<Cards /> component", () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<Cards />);
	});

	test("render Cards content container", () => {
		expect(AppWrapper.find(".container")).toHaveLength(1);
	});
});
