import { useRouter } from "next/router";
import { OnboardingLayout } from "../../components";

export default function Onboarding() {
  const router = useRouter();

  let onboardingPageData: {
    title: string;
    subtitle: string;
    pageNo: number;
    submitButtonTitle: string;
  };

  let childInputFields: React.ReactNode;

  switch (Number(router.query.step)) {
    case 1:
      onboardingPageData = {
        title: "Welcome! First things first...",
        subtitle: "You can always change them later.",
        submitButtonTitle: "Create Workspace",
        pageNo: 1,
      };
      break;
    case 2:
      onboardingPageData = {
        title: "Let's setup home for your work",
        subtitle: "You can always create another workspace later.",
        submitButtonTitle: "Create Workspace",
        pageNo: 2,
      };
      break;
    case 3:
      onboardingPageData = {
        title: "How are you using Eden?",
        subtitle: "We'll streamline your setup experience accordingly.",
        submitButtonTitle: "Create Workspace",
        pageNo: 3,
      };
      break;
    case 4:
      onboardingPageData = {
        title: "Congratulations,!",
        subtitle: "You have completed onboarding, you can start using Eden!",
        submitButtonTitle: "Launch Eden",
        pageNo: 4,
      };
      break;
    default:
      onboardingPageData = {
        title: "",
        subtitle: "",
        submitButtonTitle: "",
        pageNo: 0,
      };
      break;
  }

  return (
    <OnboardingLayout {...onboardingPageData}>
      {childInputFields}
    </OnboardingLayout>
  );
}
