"use client";
import "./index.css";
import { StepOne } from "./_features/StepOne";
import { StepTwo } from "./_features/Steptwo";
import { StepThree } from "./_features/StepThree";
import { Stepfour } from "./_features/Stepfour";
import { useState } from "react";

export default function Home() {
  const getSavedStep = () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("currentStep");
      return saved ? Number(saved) : 1;
    }
    return 1;
  };

  const [step, setStep] = useState(getSavedStep);

  const saveStep = (newStep) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", newStep);
    }
    setStep(newStep);
  };

  const handleNextStep = () => {
    saveStep(step + 1);
  };

  const handleBackStep = () => {
    if (step === 1) return;
    saveStep(step - 1);
  };
  const handleReDoStep = () => {
    if (step === 4) {
      saveStep(step - 3);
    }
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
      {step === 4 && <Stepfour handleReDoStep={handleReDoStep} />}
    </>
  );
}
