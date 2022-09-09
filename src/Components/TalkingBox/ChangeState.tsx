import styled from "styled-components";
import { useState, useEffect } from "react";
import SlotLayout from "./SlotLayout";
import CardLayout from "./CardLayout";

export default function ChangeState() {
  const [category, setCategory] = useState(false); //false가 감정별 | true가 챔피언별
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <Container>
      <LeftBox>
        <Title>상태변경</Title>
        <div>
          <SwitchBox>
            <label className="switch-button">
              <input
                type="checkbox"
                onChange={(e) => {
                  setCategory(e.target.checked);
                  setActiveIndex(2);
                }}
              />
              <span className="onoff-switch"></span>
            </label>
            {category ? (
              <div className="on">
                <span className="b">챔피언</span>별로 보기
              </div>
            ) : (
              <div className="off">
                <span className="b">감정</span>별로 보기
              </div>
            )}
          </SwitchBox>
        </div>
        <SlotLayout
          category={category}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </LeftBox>
      <CardLayout />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  padding: 60px 25px 30px 25px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
`;

const SwitchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  & > .switch-button {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 25px;

    & > input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    & > .onoff-switch {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 20px;
      background-color: #e7bb6a;
      box-shadow: inset 1px 5px 1px #ae8d4e;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    & > .onoff-switch:before {
      position: absolute;
      content: "";
      height: 17px;
      width: 17px;
      left: 4px;
      bottom: 4px;
      background-color: #fff;
      -webkit-transition: 0.5s;
      transition: 0.4s;
      border-radius: 20px;
    }

    & > input:checked + .onoff-switch {
      background-color: #d60000;
      box-shadow: inset 1px 5px 1px #b30404;
    }

    & > input:checked + .onoff-switch:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }
  }

  .on {
    color: white;
    font-size: 20px;
    & > .b {
      color: #d60000;
      font-weight: bold;
    }
  }

  .off {
    color: white;
    font-size: 20px;
    & > .b {
      color: #e7bb6a;
      font-weight: bold;
    }
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  background: linear-gradient(-45deg, #cd2626, #ba98ed, #e38b4f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
