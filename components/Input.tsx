import React from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  optional?: boolean;
}

export const Input: React.FC<IProps> = (props) => {
  const { optional, title, type } = props;

  let inputField;

  if (type === "url") {
    inputField = (
      <span className="flex border rounded-md border-slate-200 h-9 overflow-hidden items-center hover:border hover:border-slate-200">
        <div className="text-xs bg-gray-100 h-9 w-max px-2 text-gray-500 font-semibold flex flex-col justify-center border border-r-slate-200">
          www.eden.com/
        </div>
        <input
          {...props}
          className="text-xs font-normal bg-neutral-50 px-2 h-9 focus:border-none active:border-none w-full"
        />
      </span>
    );
  } else {
    inputField = (
      <input
        {...props}
        className="text-xs font-normal bg-neutral-50 border rounded-md border-slate-200 h-9 px-2 
                    hover:border hover:border-slate-200 focus:border focus:border-slate-200 active:border 
                    active:border-slate-200"
      />
    );
  }

  return (
    <span className="flex flex-col justify-between h-14 ">
      <span className="text-xs font-semibold">
        {props.title}{" "}
        {optional && (
          <span className="font-normal text-gray-400">(optional)</span>
        )}
      </span>
      {inputField}
    </span>
  );
};
