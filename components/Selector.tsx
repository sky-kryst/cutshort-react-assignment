import React from "react";

interface IProps {
  icon: React.ReactNode;
  title: string;
  subtext: string;
  isActive: boolean;
  onClick?: () => void;
}

export const Selector: React.FC<IProps> = ({
  icon,
  title,
  subtext,
  onClick,
  isActive,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-36 border rounded-md ${
        isActive && "border-brand-indigo"
      } h-36 px-6 py-4 flex flex-col justify-between`}
    >
      {icon}
      <div className="text-sm font-bold">{title}</div>
      <div className="text-xs text-gray-600">{subtext}</div>
    </div>
  );
};
