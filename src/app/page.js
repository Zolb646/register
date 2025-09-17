"use client";
import "./index.css";
import { StepOne } from "./_features/StepOne";
import { StepTwo } from "./_features/Steptwo";
import { StepThree } from "./_features/StepThree";
import { useState } from "react";
import { Stepfour } from "./_features/Stepfour";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleBackStep = () => {
    if (step === 1) {
      return;
    }
    setStep(step - 1);
  };
  return (
    <>
      {step === 1 && <StepOne handleNextStep={handleNextStep} />}
      {step === 2 && (
        <StepTwo
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
        />
      )}
      {step === 3 && (
        <StepThree
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
        />
      )}
      {step === 4 && <Stepfour />}
    </>
  );
}
