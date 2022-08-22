import google from "../../Resources/imgs/google-btn-white.png";
import logo from "../../Resources/imgs/google-logo.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  letter-spacing: -0.05;
  gap: 8px;
  padding: 7px 12px;
  cursor: pointer;
  transition: all 0.25s;
  & > img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    background-color: white;
    color: #303030;
  }
`;

const PolicyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  font-weight: 200;

  & > span {
    cursor: pointer;
  }
`;

export default function ButtonBox() {
  return (
    <Container>
      <Button>
        <img src={logo} /> Sign in with Google
      </Button>
      {/* <img src={google} /> */}
      <PolicyBox>
        <span>이용약관</span>
        <span>개인정보 처리방침</span>
      </PolicyBox>
    </Container>
  );
}
