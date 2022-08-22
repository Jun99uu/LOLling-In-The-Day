import styled from "styled-components";
import LogoBox from "../Components/LoginPage/LogoBox";
import ButtonBox from "../Components/LoginPage/ButtonBox";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: center;
`;

export default function LoginPage() {
  return (
    <Container>
      <LogoBox />
      <ButtonBox />
    </Container>
  );
}
