"use client";
import { useState } from "react";
import { FormInput } from "../_components/form-input";

export const StepThree = (props) => {
  const { handleBackStep, handleNextStep } = props;

  const [formValidates, setFormValidates] = useState({
    date: "",
    image: null,
  });

  const [errorState, setErrorState] = useState({});

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValidates({ ...formValidates, [inputName]: inputValue });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormValidates({
        ...formValidates,
        image: URL.createObjectURL(file),
      });
    }
  };

  const validateInput = () => {
    const errors = {};
    if (!formValidates.date) {
      errors.date = "Please provide your date of birth.";
    }
    if (!formValidates.image) {
      errors.image = "Please upload a profile image.";
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
          </div>
          <div className="footer" style={{ gap: "20px", marginTop: "20px" }}>
            <FormInput
              inputTag={"Date of Birth"}
              handleChange={handleInputChange}
              name={"date"}
              value={formValidates.date}
              error={errorState.date}
              placeholder={"--/--/--"}
              type={"date"}
            />
            <div>
              <label
                style={{
                  fontWeight: "600",
                }}
              >
                Profile image <span style={{ color: "red" }}>*</span>
              </label>
              <label
                htmlFor="file-upload"
                className="image-upload"
                style={formValidates.image ? { border: "none" } : ""}
              >
                {formValidates.image ? (
                  <img src={formValidates.image} alt="Profile Preview" />
                ) : (
                  <>
                    <span>
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src="./image.svg"
                      />
                    </span>
                    <p>Add image</p>
                  </>
                )}
              </label>

              <input
                id="file-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
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
          <button onClick={handleContinueButton}>Continue 3/3 &gt;</button>
        </div>
      </div>
    </div>
  );
};
