import create from "zustand";

interface IOnboardingStore {
  fullName: string;
  displayName: string;
  workspaceName: string;
  workspaceURL?: string;
  accountType: "Individual" | "Team";
}

export const useOnboardingStore = create<IOnboardingStore>((set) => ({
  fullName: "",
  displayName: "",
  workspaceName: "",
  accountType: "Individual",
}));
