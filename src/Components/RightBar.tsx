import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  RecoilRegisterStateState,
  RegisterStateInterface,
} from "../States/RecoilRegisterStateState";
import TalkingPage from "./TalkingBox/TalkingPage";
import RegisterState from "./TalkingBox/RegisterState";

export default function RightBar() {
  const [recoilInfo, setRecoilInfo] = useRecoilState(RecoilRegisterStateState);
  const registerState: RegisterStateInterface = { ...recoilInfo };
  const [menu, setMenu] = useState(0); // 0은 이야기, 1은 일기, 2는 롤잔디, 3은 프로필

  return (
    <Container>
      <ul>
        <li
          onClick={() => setMenu(0)}
          className={menu === 0 ? "selected" : "non"}
        >
          이야기
        </li>
        <li
          onClick={() => setMenu(1)}
          className={menu === 1 ? "selected" : "non"}
        >
          일기
        </li>
        <li
          onClick={() => setMenu(2)}
          className={menu === 2 ? "selected" : "non"}
        >
          롤잔디
        </li>
        <li
          onClick={() => setMenu(3)}
          className={menu === 3 ? "selected" : "non"}
        >
          프로필
        </li>
      </ul>
      {menu === 0 ? (
        <TalkingPage />
      ) : menu === 1 ? (
        <>일기</>
      ) : menu === 2 ? (
        <>롤잔디</>
      ) : menu === 3 ? (
        <>프로필</>
      ) : (
        <></>
      )}
      {registerState.state ? <RegisterState /> : <></>}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 93vh;
  background-color: #3d3d3d;
  opacity: 95%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: start;
  position: relative;

  & > ul {
    padding: 0px;
    list-style-type: none;
    margin: 0px;
    display: flex;
    gap: 10px;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    position: absolute;
    top: 20px;
    left: 22px;

    & > li {
      transition: all 0.15s;
      cursor: pointer;
    }

    & > .non {
      opacity: 0.8;
      font-size: 16px;
      font-weight: 400;
    }

    & > .selected {
      opacity: 1;
      font-size: 18px;
      font-weight: 600;
    }

    & > .non:hover {
      opacity: 0.9;
    }
  }
`;
