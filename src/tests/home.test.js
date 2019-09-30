import React from "react";
import { shallow } from "enzyme";
import Home from "../components/home";

describe("Test home page component", () => {
  it("renders home page without crashing", () => {
    shallow(<Home />);
  });
});
