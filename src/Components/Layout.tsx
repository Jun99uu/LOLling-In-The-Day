import styled from "styled-components";
// import { useRecoilState } from "recoil";
// import { RecoilAuthState } from "../States/RecoilAuthState";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import UnderBar from "./UnderBar";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3.4fr;
  padding: 20px;
  column-gap: 20px;
  position: relative;
  overflow: hidden;
`;

interface AuthState {
  state: boolean;
}

export default function Layout() {
  // const [recoilInfo, setRecoilInfo] = useRecoilState(RecoilAuthState);
  // const defaultState: AuthState = { ...recoilInfo };

  return (
    <Container>
      <LeftBar />
      <RightBar />
      <UnderBar />
    </Container>
  );
}
