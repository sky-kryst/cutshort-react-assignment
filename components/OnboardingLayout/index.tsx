import React from "react";

interface IProps {
  children?: React.ReactNode;
  submitButtonTitle: string;
  title: string;
  subtitle: string;
  pageNo: number;
}

export const OnboardingLayout: React.FC<IProps> = ({
  children,
  submitButtonTitle,
  title,
  subtitle,
  pageNo,
}) => {
  return (
    <body className="bg-slate-200 h-screen w-screen flex justify-center items-center px-14 py-28">
      <div
        className={`bg-neutral-50 h-full w-full flex flex-col items-center justify-between py-32`}
      >
        {/* <div className="w-1/3 border border-black"> */}
        <Stepper noOfSteps={4} stepNo={pageNo} />
        <div className="flex flex-col justify-between items-center h-16">
          <h1 className="font-bold text-2xl">{title}</h1>
          <h4 className="font-normal text-gray-500 text-sm">{subtitle}</h4>
        </div>
        <form>
          {children}
          <button
            type="submit"
            className="bg-brand-indigo h-10 text-sm w-80 text-neutral-50 border rounded-lg"
          >
            {submitButtonTitle}
          </button>
        </form>
        {/* </div> */}
      </div>
    </body>
  );
};

interface IStepperProps {
  noOfSteps: number;
  stepNo: number;
}

const Stepper: React.FC<IStepperProps> = ({ noOfSteps, stepNo }) => {
  let stepperElements: Array<React.ReactNode> = [];

  for (let i = 1; i <= noOfSteps; i++) {
    const isActive = stepNo >= i;

    stepperElements.push(
      <div
        className={`h-8 w-8 rounded-full flex justify-center items-center text-xs ${
          isActive
            ? "bg-brand-indigo text-neutral-50"
            : "border-gray-200 bg-neutral-50 border-2 border-solid text-zinc-500"
        }`}
      >
        {i}
      </div>
    );

    if (i < noOfSteps) {
      stepperElements.push(
        <>
          <span
            className={`h-px w-5 ${
              isActive ? "bg-brand-indigo" : "bg-gray-200"
            }`}
          ></span>
          <span
            className={`h-px w-5 ${
              stepNo > i ? "bg-brand-indigo" : "bg-gray-200"
            }`}
          ></span>
        </>
      );
    }
  }

  return <div className="flex items-center">{stepperElements}</div>;
};
