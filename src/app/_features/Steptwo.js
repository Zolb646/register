"use client";
import { useState } from "react";
import { FormInput } from "../_components/form-input";

export const StepTwo = (props) => {
  const { handleBackStep, handleNextStep } = props;
  const [formValidates, setFormValidates] = useState({
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
  });
  const [errorState, setErrorState] = useState({});

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValidates({ ...formValidates, [inputName]: inputValue });
  };
  const validateInput = () => {
    const errors = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValidates.email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!/^[0-9]{8}$/.test(formValidates.phonenumber)) {
      errors.phonenumber = "Please enter a valid phone number.";
    }

    if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(formValidates.password)) {
      errors.password = "Password must include letters and numbers.";
    }

    if (formValidates.password !== formValidates.confirmpassword) {
      errors.confirmpassword = "Passwords do not match. Please try again.";
    }

    return errors;
  };

  const handleContinueButton = () => {
    const errors = validateInput();
    setErrorState(errors);
    if (Object.keys(errors).length === 0) {
      setErrorState({});
      handleNextStep();
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
          </div>{" "}
          <div className="footer">
            <FormInput
              inputTag={"Email"}
              handleChange={handleInputChange}
              name={"email"}
              value={formValidates.email}
              error={errorState.email}
              placeholder={"Enter your email..."}
              type={"text"}
            />

            <FormInput
              inputTag={"Phone Number"}
              handleChange={handleInputChange}
              name={"phonenumber"}
              value={formValidates.phonenumber}
              error={errorState.phonenumber}
              placeholder={"Enter your phone number..."}
              type={"tel"}
            />

            <FormInput
              inputTag={"Password"}
              handleChange={handleInputChange}
              name={"password"}
              value={formValidates.password}
              error={errorState.password}
              placeholder={"Enter your password..."}
              type={"password"}
            />

            <FormInput
              inputTag={"Confirm Password"}
              handleChange={handleInputChange}
              name={"confirmpassword"}
              value={formValidates.confirmpassword}
              error={errorState.confirmpassword}
              placeholder={"Confirm your password..."}
              type={"password"}
            />
          </div>
        </div>
        <div className="footer-con">
          <button
            onClick={handleBackStep}
            style={{
              background: "#f5f5f7",
              width: "50%",
              color: "black",
              border: "1px solid grey",
            }}
          >
            &gt; Back
          </button>
          <button onClick={handleContinueButton}>Continue 2/3 &gt;</button>
        </div>
      </div>
    </div>
  );
};
