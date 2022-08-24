import styled from "styled-components";
import { useState, useEffect } from "react";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 45px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  -webkit-animation: AnimationName 16s ease infinite;
  -moz-animation: AnimationName 16s ease infinite;
  -o-animation: AnimationName 16s ease infinite;
  animation: AnimationName 16s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-o-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  & > div {
    color: #fff;
    font-size: 28px;
    font-weight: 900;
    text-shadow: 2px 2px 6px #363636d1;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 35%;
    text-align: center;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    cursor: pointer;
  }

  & > .first {
    background: linear-gradient(-45deg, #d60000, #ba98ed, #e38b4f);
    background-size: 300% 300%;
    animation: AnimationName 15s ease infinite;
  }

  & > .second {
    background: linear-gradient(-45deg, #e38b4f, #ba98ed, #d60000);
    background-size: 300% 300%;
    animation: AnimationName 15s ease infinite;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  text-align: center;
  gap: 15px;
  & > .title {
    font-size: 24px;
  }

  & > .content {
    font-size: 18px;
    font-weight: 200;
  }
`;

export default function TalkingIndex() {
  return (
    <Box>
      <Circle>
        <div className="first">상태변경</div>
        <div className="second">콕찌르기</div>
      </Circle>
      <InfoBox>
        <span className="title">알고 계셨나요?</span>
        <span className="content">
          {
            "상태를 변경하면 친구들에게, 콕찌르기를 하면 상대에게 알림이 간답니다.\n유쾌한 이야기를 주고받아보세요."
          }
        </span>
      </InfoBox>
    </Box>
  );
}
