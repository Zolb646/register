"use client";
import { useState, useEffect } from "react";
import { FormInput } from "../_components/form-input";

const checkIfInputHasNumbers = (string) => /[0-9]/.test(string);
const checkIfInputHasSpecialCharacters = (string) =>
  /[^a-zA-Z0-9]/.test(string);

const addStepOneValuesToLocalStorage = (values) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("formValidatesStep1", JSON.stringify(values));
  }
};

export const StepOne = ({ handleNextStep }) => {
  const [formValidates, setFormValidates] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [errorState, setErrorState] = useState({});

  // 🔹 localStorage-с утга сэргээх
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("formValidatesStep1");
      if (saved) {
        setFormValidates(JSON.parse(saved));
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValidates({ ...formValidates, [name]: value });
  };

  const validateInput = () => {
    const errors = {};
    if (
      !formValidates.firstName ||
      checkIfInputHasNumbers(formValidates.firstName) ||
      checkIfInputHasSpecialCharacters(formValidates.firstName)
    ) {
      errors.firstName = "First name should have only letters";
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

  const handleContinueButton = () => {
    const errors = validateInput();
    setErrorState(errors);

    if (Object.keys(errors).length === 0) {
      addStepOneValuesToLocalStorage(formValidates);
      handleNextStep();
      console.log(formValidates);
    }
  };

  return (
    <div className="container">
      <div className="con">
        <div className="header-con">
          <div className="header">
            <img src="/Main 1.svg" alt="logo" />
            <h1>Join Us! 😎</h1>
            <p>Please provide all current information accurately.</p>
          </div>
          <div className="footer">
            <FormInput
              inputTag="First Name"
              handleChange={handleInputChange}
              name="firstName"
              value={formValidates.firstName}
              error={errorState.firstName}
              placeholder="Enter your first name..."
              type="text"
            />
            <FormInput
              inputTag="Last Name"
              handleChange={handleInputChange}
              name="lastName"
              value={formValidates.lastName}
              error={errorState.lastName}
              placeholder="Enter your last name..."
              type="text"
            />
            <FormInput
              inputTag="Username"
              handleChange={handleInputChange}
              name="userName"
              value={formValidates.userName}
              error={errorState.userName}
              placeholder="Enter your username..."
              type="text"
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
