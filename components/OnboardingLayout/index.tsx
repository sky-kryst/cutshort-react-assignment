import Image from "next/future/image";
import { useRouter } from "next/router";
import React from "react";
import EdenLogo from "../../public/images/eden_logo.png";
import { Stepper } from "../Stepper";

interface IProps {
  children?: React.ReactNode;
  submitButtonTitle: string;
  title: string;
  subtitle: string;
  pageNo: number;
  titleImage?: JSX.Element;
  onFormSubmission: (event: any) => void;
}

export const OnboardingLayout: React.FC<IProps> = ({
  children,
  submitButtonTitle,
  title,
  subtitle,
  pageNo,
  titleImage,
  onFormSubmission,
}) => {
  return (
    <body className="bg-slate-200 h-screen w-screen flex justify-center items-center px-14 py-14">
      <Image
        src={EdenLogo}
        alt="Eden logo"
        height={31}
        width={67}
        className="absolute left-1/5 top-32"
      />
      <div className="bg-neutral-50 h-full w-full flex flex-col items-center justify-between py-36 shadow-sm">
        <Stepper noOfSteps={4} stepNo={pageNo} />
        {titleImage ?? null}
        <div className="flex flex-col justify-between items-center h-16">
          <h1 className="font-bold text-2xl">{title}</h1>
          <h4 className="font-medium text-gray-500 text-sm">{subtitle}</h4>
        </div>
        <form className="flex flex-col justify-between h-fit">
          {children}
          <button
            type="submit"
            className="bg-brand-indigo h-10 text-sm w-80 text-neutral-50 border rounded-lg mt-6"
            onClick={onFormSubmission}
          >
            {submitButtonTitle}
          </button>
        </form>
      </div>
    </body>
  );
};
