import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  RecoilRegisterStateState,
  RegisterStateInterface,
} from "../../States/RecoilRegisterStateState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const dummyMyName = "중규리";

export default function RegisterState() {
  const [recoilInfo, setRecoilInfo] = useRecoilState(RecoilRegisterStateState);
  const registerState: RegisterStateInterface = { ...recoilInfo };

  const [curTime, setCurTime] = useState("");
  const [content, setContent] = useState("");

  const backHandler = () => {
    const defaultState: RegisterStateInterface = {
      state: false,
      cardId: 0,
      leftColor: "",
      rightColor: "",
      title: "",
      subtitle: "",
      decoRes: "",
    };
    setRecoilInfo(defaultState);
  };

  const getDate = () => {
    const now = moment().format(`A hh:mm`);
    setCurTime(now);
  };

  const getContent = () => {
    const content = `${dummyMyName}님이,\n${recoilInfo.title}\n${recoilInfo.subtitle}`;
    setContent(content);
  };

  useEffect(() => {
    getDate();
    getContent();
  }, []);

  return (
    <Container
      leftColor={registerState.leftColor}
      rightColor={registerState.rightColor}
    >
      <Decoration src={registerState.decoRes} />
      <BackButton onClick={() => backHandler()}>
        <FontAwesomeIcon icon={faCaretLeft} />
        <span>뒤로가기</span>
      </BackButton>
      <ContentBox>
        <span style={{ fontWeight: "200" }}>{curTime}</span>
        <Content>{content}</Content>
        <UpdateButton>
          <GradientText
            leftColor={registerState.leftColor}
            rightColor={registerState.rightColor}
          >
            상태 등록하기
          </GradientText>
        </UpdateButton>
      </ContentBox>
    </Container>
  );
}

const Container = styled.div<{ leftColor: string; rightColor: string }>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  z-index: 15;
  background: ${(props) =>
    `linear-gradient(135deg, ${props.leftColor}, ${props.rightColor})`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.div`
  cursor: pointer;
  color: white;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  position: absolute;
  top: 30px;
  left: 30px;
  gap: 5px;
  transition: all 0.15s;

  &:hover {
    transform: scale(1.03);
  }
`;

const ContentBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  z-index: 20;
`;

const Content = styled.span`
  font-weight: 700;
  font-size: 36px;
  white-space: pre-line;
  word-break: keep-all;
  text-shadow: 2px 2px 6px #252525;
`;

const UpdateButton = styled.button`
  border: none;
  background-color: white;
  border-radius: 20px;
  padding: 15px 30px;
  margin-top: 10px;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all 0.15s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const GradientText = styled.span<{ leftColor: string; rightColor: string }>`
  font-size: 20px;
  font-weight: 900;
  font-family: "Pretendard Variable";
  background: ${(props) =>
    `linear-gradient(135deg, ${props.leftColor}, ${props.rightColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Decoration = styled.img`
  max-width: 180px;
  position: absolute;
  z-index: 15;
  top: 30%;
  right: 40%;
  opacity: 0.4;
  transform: rotate(30deg);
`;
