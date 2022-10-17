interface IProps {
  children?: React.ReactNode;
}

export const OnboardingLayout: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};
