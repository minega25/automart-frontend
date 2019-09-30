import React from "react";
import { shallow } from "enzyme";
import RegisterForm from "../components/registerForm";

describe("Test register form component", () => {
  it("renders register form without crashing", () => {
    shallow(<RegisterForm />);
  });
});
