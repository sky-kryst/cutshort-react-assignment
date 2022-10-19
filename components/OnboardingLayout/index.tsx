import React from "react";
import { Stepper } from "../Stepper";
import Image from "next/image";
import EdenLogo from "../../public/images/eden_logo.png";

interface IProps {
  children?: React.ReactNode;
  submitButtonTitle: string;
  title: string;
  subtitle: string;
  pageNo: number;
  titleImage?: typeof Image;
}

export const OnboardingLayout: React.FC<IProps> = ({
  children,
  submitButtonTitle,
  title,
  subtitle,
  pageNo,
  titleImage,
}) => {
  return (
    <body className="bg-slate-200 h-screen w-screen flex justify-center items-center px-14 py-20">
      <div
        className={`bg-neutral-50 h-full w-full flex flex-col items-center justify-between py-32 shadow-sm`}
      >
        {/* <div className="w-1/3 border border-black"> */}
        <Image src={EdenLogo} alt="Eden logo" height={39.75} width={94.5} />
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


