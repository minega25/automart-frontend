import React from "react";
import { shallow } from "enzyme";
import Footer from "../components/footer";

describe("Test footer page component", () => {
  it("renders footer page without crashing", () => {
    shallow(<Footer />);
  });
});
