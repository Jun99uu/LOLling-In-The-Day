import google from "../../Resources/imgs/google-btn-white.png";
import logo from "../../Resources/imgs/google-logo.png";
import kakao from "../../Resources/imgs/kakaologin.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  background-color: #fee500;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #303030;
  letter-spacing: -0.05;
  gap: 24px;
  padding: 8px 24px 8px 12px;
  cursor: pointer;
  transition: all 0.25s;
  font-weight: 500;
  height: 40px;

  & > img {
    width: 20px;
    height: 20px;
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
  let navigate = useNavigate();
  const moveToMain = () => {
    navigate("/main");
  };
  return (
    <Container>
      <Button onClick={() => moveToMain()}>
        <img src={kakao} />
        Login with Kakao
      </Button>
      <PolicyBox>
        <span>이용약관</span>
        <span>개인정보 처리방침</span>
      </PolicyBox>
    </Container>
  );
}
