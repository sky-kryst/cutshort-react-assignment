import React from "react";

interface IProps {
  icon: React.ReactNode;
  title: string;
  subtext: string;
  isActive: boolean;
}

const Selector: React.FC<IProps> = ({ icon, title, subtext }) => {
  return (
    <div>
      {icon}
      <span>{title}</span>
      <span>{subtext}</span>
    </div>
  );
};

export default Selector;
