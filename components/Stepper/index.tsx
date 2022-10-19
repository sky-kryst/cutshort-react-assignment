interface IStepperProps {
    noOfSteps: number;
    stepNo: number;
  }
  
export const Stepper: React.FC<IStepperProps> = ({ noOfSteps, stepNo }) => {
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