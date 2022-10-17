interface IProps {
  children?: React.ReactNode;
  submitButtonTitle: string;
}

export const OnboardingLayout: React.FC<IProps> = ({
  children,
  submitButtonTitle,
}) => {
  return (
    <div>
      <div>
        <form>
          {children}
          {submitButtonTitle && (
            <button type="submit">{submitButtonTitle}</button>
          )}
        </form>
      </div>
    </div>
  );
};
