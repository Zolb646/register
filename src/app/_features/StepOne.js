"use client";
import { useState, useEffect } from "react";
import { FormInput } from "../_components/form-input";

export const StepOne = (props) => {
  const { handleNextStep } = props;
  const checkIfInputHasNumbers = (string) => {
    return /[0-9]/.test(string);
  };

  const checkIfInputHasSpecialCharacters = (string) => {
    return /[^a-zA-Z0-9]/.test(string);
  };
  const [formValidates, setFormValidates] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [errorState, setErrorState] = useState({});

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValidates({ ...formValidates, [inputName]: inputValue });
  };

  const validateInput = () => {
    const errors = {};
    if (
      !formValidates.firstName ||
      checkIfInputHasNumbers(formValidates.firstName) ||
      checkIfInputHasSpecialCharacters(formValidates.firstName)
    ) {
      errors.firstName = "First name   should have only letters";
    }
    if (
      !formValidates.lastName ||
      checkIfInputHasNumbers(formValidates.lastName) ||
      checkIfInputHasSpecialCharacters(formValidates.lastName)
    ) {
      errors.lastName = "Last name should only contain letters";
    }
    if (!formValidates.userName || formValidates.userName.length < 3) {
      errors.userName = "Username must be at least 3 characters long";
    }
    return errors;
  };
  useEffect(() => {
    const savedData = localStorage.getItem("formValidates");
    if (savedData) {
      setFormValidates(JSON.parse(savedData));
    }
  }, []);

  const handleContinueButton = () => {
    const errors = validateInput();
    setErrorState(errors);
    if (Object.keys(errors).length === 0) {
      setErrorState({});
      handleNextStep();
      localStorage.setItem("formValidates", JSON.stringify(formValidates));
      console.log(formValidates);
    } else {
      setErrorState(errors);
    }
  };

  return (
    <div className="container">
      <div className="con">
        <div className="header-con">
          <div className="header">
            <img src="/Main 1.svg" /> <h1>Join Us! 😎</h1>
            <p>Please provide all current information accurately.</p>
          </div>
          <div className="footer">
            <FormInput
              inputTag={"First Name"}
              handleChange={handleInputChange}
              name={"firstName"}
              value={formValidates.firstName}
              error={errorState.firstName}
              placeholder={"Enter your first name..."}
              type={"text"}
            />

            <FormInput
              inputTag={"Last Name"}
              handleChange={handleInputChange}
              name={"lastName"}
              value={formValidates.lastName}
              error={errorState.lastName}
              placeholder={"Enter your last name..."}
              type={"text"}
            />

            <FormInput
              inputTag={"Username"}
              handleChange={handleInputChange}
              name={"userName"}
              value={formValidates.userName}
              error={errorState.userName}
              placeholder={"Enter your username..."}
              type={"text"}
            />
          </div>
        </div>
        <div className="footer-con">
          <button onClick={handleContinueButton}>Continue 1/3 &gt;</button>
        </div>
      </div>
    </div>
  );
};
