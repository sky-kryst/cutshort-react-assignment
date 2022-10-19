import React from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input: React.FC<IProps> = (props) => {
  return (
    <>
      <input {...props} />
    </>
  );
};
