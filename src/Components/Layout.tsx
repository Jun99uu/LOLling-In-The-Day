import styled from "styled-components";
import { useRecoilState } from "recoil";
import { RecoilAuthState } from "../States/RecoilAuthState";

interface AuthState {
  state: boolean;
}

export default function Layout() {
  const [recoilInfo, setRecoilInfo] = useRecoilState(RecoilAuthState);
  const defaultState: AuthState = { ...recoilInfo };
  return <></>;
}
