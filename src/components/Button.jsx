import React from "react";
const Button = ({ text, buttonClassName, handleSubmit }) => {
  return (
    <button
      type="submit"
      data-testid="button-test-id"
      className={buttonClassName}
      onClick={(e) => handleSubmit(e)}
    >
      {text}
    </button>
  );
};

export default Button;
