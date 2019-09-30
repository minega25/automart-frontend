import React from "react";
import { shallow } from "enzyme";
import NotFound from "../components/notFound";

describe("Test not found page component", () => {
  it("renders not found page without crashing", () => {
    shallow(<NotFound />);
  });
});
