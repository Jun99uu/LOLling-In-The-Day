import { atom } from "recoil";

export interface RegisterStateInterface {
  state: boolean;
  cardId: number;
  leftColor: string;
  rightColor: string;
  title: string;
  subtitle: string;
  decoRes: string;
}

const initialState: RegisterStateInterface = {
  state: false,
  cardId: 0,
  leftColor: "",
  rightColor: "",
  title: "",
  subtitle: "",
  decoRes: "",
};

export const RecoilRegisterStateState = atom({
  key: "RecoilRegisterStateState",
  default: initialState,
});
