import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Box = styled.div`
  width: 90%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  position: relative;
  border-radius: 15px;
  gap: 10px;
  cursor: pointer;
  transition: all 0.15s;

  & > .type {
    color: black;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;

  & > .img-box {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & > .inner-box {
    display: flex;
    flex-direction: column;
    justify-content: start;

    & > .name {
      color: black;
      font-size: 16px;
      font-weight: 700;
    }
    & > .date {
      color: black;
      font-size: 13px;
      font-weight: 300;
      letter-spacing: -0.05;
    }
  }
`;

const Champion = styled.div`
  padding: 3px 5px;
  font-size: 12px;
  font-weight: 600;
  background-color: #87c289;
  border-radius: 3px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  transition: all 0.15s;
  cursor: pointer;
`;

interface noticeProps {
  index: number;
  profile: string;
  name: string;
  createdAt: string;
  type: number; //0이면 상태변경, 1이면 콕찌르기
  champion: string;
}

export default function NoticeBox(props: noticeProps) {
  const { index, profile, name, createdAt, type, champion } = props;
  const [dateByString, setDateByString] = useState("");
  const [typeToString, setTypeToString] = useState("");

  const dateFormater = (value: string) => {
    const nowDate = new Date();
    const date = new Date(value);
    const dateByString = moment(date).format("YYYY-MM-DD HH:mm:ss");
    const gapTime = date.getTime() - nowDate.getTime();
    if (gapTime > -86400000) {
      setDateByString(moment(date).fromNow());
    } else if (gapTime < -86400000) {
      setDateByString(dateByString);
    }
  };

  const contentByType = () => {
    if (type === 1) setTypeToString("상태를 업데이트 하였습니다.");
    else setTypeToString("콕 찔렀습니다.");
  };

  useEffect(() => {
    dateFormater(createdAt);
    contentByType();
  }, []);

  return (
    <Box>
      <InfoBox>
        <div className="img-box">
          <img src={profile} />
        </div>
        <div className="inner-box">
          <span className="name">{name}</span>
          <span className="date">{dateByString}</span>
        </div>
      </InfoBox>
      <span className="type">{typeToString}</span>
      <Champion>{champion}</Champion>
      <CloseButton>
        <FontAwesomeIcon icon={faXmark} />
      </CloseButton>
    </Box>
  );
}
