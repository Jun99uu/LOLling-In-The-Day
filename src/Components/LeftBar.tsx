import styled from "styled-components";
import { useState, useEffect } from "react";
import NoticeLayout from "./NoticeBox/NoticeLayout";
const Container = styled.div`
  width: 100%;
  height: 93vh;
  background-color: #3d3d3d;
  opacity: 95%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-self: start;
  position: relative;

  & > ul {
    list-style-type: none;
    padding: 0px;
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

export default function LeftBar() {
  const [menu, setMenu] = useState(0); // 0은 알림, 1은 친구목록
  return (
    <Container>
      <ul>
        <li
          onClick={() => setMenu(0)}
          className={menu === 0 ? "selected" : "non"}
        >
          알림
        </li>
        <li
          onClick={() => setMenu(1)}
          className={menu === 1 ? "selected" : "non"}
        >
          친구
        </li>
      </ul>
      {menu === 0 ? <NoticeLayout /> : menu === 1 ? <></> : <></>}
    </Container>
  );
}
