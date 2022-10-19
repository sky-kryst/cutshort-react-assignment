import { useRouter } from "next/router";
import { Input, OnboardingLayout } from "../../components";
import Selector from "../../components/Selector";
import Image from "next/future/image";
import EdenCorrect from "../../public/images/eden_correct.png";
export default function Onboarding() {
  const router = useRouter();

  let onboardingPageData: {
    title: string;
    subtitle: string;
    pageNo: number;
    submitButtonTitle: string;
    onFormSubmission: (event: any) => void;
    titleImage?: JSX.Element;
  };

  let childInputFields: React.ReactNode;

  const onFormSubmission = (event: any) => {
    event.preventDefault();

    router.push(`/onboarding/${Number(router.query.step) + 1}`);
  };

  switch (Number(router.query.step)) {
    case 1:
      onboardingPageData = {
        title: "Welcome! First things first...",
        subtitle: "You can always change them later.",
        submitButtonTitle: "Create Workspace",
        pageNo: 1,
        onFormSubmission,
      };

      childInputFields = (
        <span className="flex flex-col justify-between h-32">
          <Input title="Full Name" placeholder="Steve Jobs" />
          <Input title="Display Name" placeholder="Steve" />
        </span>
      );
      break;
    case 2:
      onboardingPageData = {
        title: "Let's setup home for your work",
        subtitle: "You can always create another workspace later.",
        submitButtonTitle: "Create Workspace",
        pageNo: 2,
        onFormSubmission,
      };

      childInputFields = (
        <span className="flex flex-col justify-between h-32">
          <Input title="Workspace Name" placeholder="Eden" />
          <Input
            title="Workspace URL"
            placeholder="Example"
            type="url"
            optional
          />
        </span>
      );
      break;
    case 3:
      onboardingPageData = {
        title: "How are you using Eden?",
        subtitle: "We'll streamline your setup experience accordingly.",
        submitButtonTitle: "Create Workspace",
        pageNo: 3,
        onFormSubmission,
      };

      childInputFields = (
        <span className="flex h-max w-80 justify-between">
          <Selector
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            }
            title="For myself"
            subtext=""
          />
          <Selector
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                  clipRule="evenodd"
                />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
              </svg>
            }
            title="With my team"
            subtext=""
          />
        </span>
      );
      break;
    case 4:
      onboardingPageData = {
        title: "Congratulations,!",
        subtitle: "You have completed onboarding, you can start using Eden!",
        submitButtonTitle: "Launch Eden",
        pageNo: 4,
        onFormSubmission,
        titleImage: <Image src={EdenCorrect} alt="Onboarding successful" />,
      };
      break;
    default:
      onboardingPageData = {
        title: "",
        subtitle: "",
        submitButtonTitle: "",
        pageNo: 0,
        onFormSubmission,
      };
      break;
  }

  return (
    <OnboardingLayout {...onboardingPageData}>
      {childInputFields}
    </OnboardingLayout>
  );
}
