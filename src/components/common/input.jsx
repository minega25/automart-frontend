import React from "react";

const Input = ({ type, name, placeholder, ...rest }) => {
  return (
    <div className="row centered ">
      <input
        {...rest}
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        className="form-input"
      />
    </div>
  );
};

export default Input;
