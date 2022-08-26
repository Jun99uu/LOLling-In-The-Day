import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBell,
  faBellSlash,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

interface UserInfo {
  name: string;
  profile: string;
  icon: string;
  state: string;
  content: string;
}

export default function UnderBar() {
  const [info, setInfo] = useState<UserInfo>();
  const [bell, setBell] = useState(true);
  const [collapse, setCollapse] = useState(true); //true가 펼쳐짐, false가 접힘

  const getMyInfo = () => {
    //통신

    //더미데이터
    const tmpInfo: UserInfo = {
      name: "이준규",
      profile:
        "https://i.pinimg.com/564x/e5/2d/55/e52d559cdd7dcf612e9657e86c7ba541.jpg",
      icon: "https://w.namu.la/s/47f7f526249b4aa7e76c7382643c57e6ff8bfe8687493077fab27d4980c4837f045f80e0d61efaf57dfe6add99feef217121ac2ecf593b5d9f1b9696e915d10b30ccf10304638509411ce70d56028403ecb05b45ed09d3cfea28dc85d8fbb210",
      state: "피곤해요",
      content: "조이의\n헤롱헤롱 쿨쿨 방울에 맞았나봐요.",
    };
    setInfo(tmpInfo);
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <Container collapse={collapse}>
      {info ? (
        <>
          <ImgBox collapse={collapse}>
            <ProfileBox>
              <img src={info.profile} />
            </ProfileBox>
            <IconBox>
              <img src={info.icon} />
            </IconBox>
          </ImgBox>
          <CoverBox>
            <InfoBox collapse={collapse}>
              <span className="name">{info.name}님은 지금</span>
              <span className="state">{info.state}</span>
              <span className="content">{info.content}</span>
            </InfoBox>
          </CoverBox>
        </>
      ) : (
        <></>
      )}
      <SettingBox collapse={collapse}>
        <FontAwesomeIcon icon={faGear} className="setting" />
        <FontAwesomeIcon
          icon={bell ? faBell : faBellSlash}
          onClick={() => setBell((prev) => !prev)}
          className="setting"
        />
        <FontAwesomeIcon
          icon={faCaretDown}
          className="collapse-btn"
          onClick={() => setCollapse((prev) => !prev)}
        />
      </SettingBox>
    </Container>
  );
}

const Container = styled.div<{ collapse: boolean }>`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 550px;
  height: 120px;
  background-color: ${(props) => (props.collapse ? "white" : "#ffffff67")};
  border-radius: 20px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  transform: ${(props) =>
    props.collapse ? "translate(-50%, 0%)" : "translate(-50%, 80px)"};
  transition: all 0.25s;
`;

const ImgBox = styled.div<{ collapse: boolean }>`
  position: relative;
  transform: ${(props) =>
    props.collapse ? "translateY(0%)" : "translateY(110px)"};
  transition: all 0.35s;
`;

const ProfileBox = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  overflow: hidden;
  border: 5px solid white;
  position: absolute;
  top: -60px;
  left: 30px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  top: 45px;
  left: 155px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CoverBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  overflow: hidden;
  margin-left: 230px;
`;

const InfoBox = styled.div<{ collapse: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: black;
  white-space: pre-line;
  justify-content: start;
  transform: ${(props) =>
    props.collapse ? "translateY(0%)" : "translateY(110px)"};
  transition: all 0.35s;

  & > .name {
  }

  & > .state {
    font-size: 22px;
    font-weight: 700;
  }

  & > .content {
    font-weight: 500;
  }
`;

const SettingBox = styled.div<{ collapse: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: black;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 18px;

  & > .setting {
    cursor: pointer;
  }

  & > .collapse-btn {
    cursor: pointer;
    transform: ${(props) =>
      props.collapse ? "rotate(0deg)" : "rotate(180deg)"};
    transition: all 0.25s;
  }
`;
