import { atom } from "recoil";

export interface AuthState {
  state: boolean;
}

const initialState: AuthState = {
  state: false,
};

export const RecoilAuthState = atom({
  key: "RecoilAuthState",
  default: initialState,
});
