import { useCallback, useState } from "react";

const useInput = ({ validator }) => {
  const [value, setValue] = useState("");
  const [inputTouch, setInputTouch] = useState(false);

  const valueIsValid = validator(value);
  const inputError = inputTouch && !valueIsValid;

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouch(true);
  };

  const resetInput = useCallback(() => {
    setValue("");
    setInputTouch(false);
  }, []);

  return {
    value,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
    inputError,
    valueIsValid,
  };
};

export default useInput;
