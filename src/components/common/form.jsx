import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {
    data: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderButton(value) {
    return (
      <div className="row centered">
        <input type="submit" className="button" name="" value={value} />
      </div>
    );
  }

  renderInput(type, name, placeholder) {
    const { data } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;
