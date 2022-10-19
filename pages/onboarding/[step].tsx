import React from "react";
import { OnboardingLayout } from "../../components";

export default function Onboarding() {
  return (
    <OnboardingLayout
      title="Welcome! First things first..."
      subtitle="You can always change them later."
      pageNo={3}
      submitButtonTitle="Submit"
    ></OnboardingLayout>
  );
}
