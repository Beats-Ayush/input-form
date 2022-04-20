import React from "react";
import useInput from "../hooks/use-input";

const Input = ({ type, placeholder, name, resetForm }) => {
  let errorText = "First Name shouldn't be empty";
  if (name === "lastName") {
    errorText = "Last Name shouldn't be empty";
  } else if (name === "password") {
    errorText = "Password shouldn't be empty";
  } else if (name === "email") {
    errorText = "email error";
  }

  let validator = (val) => {
    return val.trim() !== "";
  };

  if (type === "email") {
    validator = (val) => {
      return val.trim().includes("@");
    };
  }

  const {
    value,
    inputChangeHandler,
    inputBlurHandler,
    inputError,
    valueIsValid,
    resetInput,
  } = useInput({ validator });

  // allInputsTouched(inputBlurHandler);
  // resetForm(resetInput);

  const errorInputClass = !inputError ? "hiddenSign" : "";
  const errorTextClass = !inputError ? "hiddenText" : "";

  return (
    <>
      <input
        className={`card-form__form__item ${errorInputClass}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
      />
      <p className={`card-form__form__item-error ${errorTextClass}`}>
        {errorText}
      </p>
    </>
  );
};

export default Input;
