import styled from "styled-components";
import Angular from "../Angular";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  & > span {
    font-size: 36px;
    font-weight: 900;
    color: white;
    white-space: pre-line;
    text-align: center;
  }
`;

const SymbolBox = styled.div`
  width: 180px;
  height: 180px;
`;

export default function LogoBox() {
  return (
    <Container>
      <SymbolBox>
        <Angular />
      </SymbolBox>
      <span>{`LOLing\nIn The Day`}</span>
    </Container>
  );
}
