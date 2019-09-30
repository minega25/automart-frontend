import React from "react";
import { shallow } from "enzyme";
import NavBar from "../components/NavBar";

describe("Test NavBar  component", () => {
  it("renders NavBar without crashing", () => {
    shallow(<NavBar />);
  });
});
