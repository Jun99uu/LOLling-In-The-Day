import { useState, useEffect } from "react";
import styled from "styled-components";
import NoticeBox from "./NoticeBox";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 8px;
  padding: 50px 0px 40px 0px;

  & > span {
    font-weight: 200;
    margin-right: 14px;
    font-size: 14px;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: rgba(33, 133, 133, 1);
    border-radius: 10px;
  }
`;

const ItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

interface Notification {
  profile: string;
  name: string;
  createdAt: string;
  type: number; //0이면 상태변경, 1이면 콕찌르기
  champion: string;
}

export default function NoticeLayout() {
  const [notices, setNotices] = useState<Array<Notification>>();

  const getMyNotice = () => {
    //더미데이터
    const tmpNotice: Notification = {
      profile:
        "https://i.pinimg.com/564x/e5/2d/55/e52d559cdd7dcf612e9657e86c7ba541.jpg",
      name: "드르륵..탁드르륵..탁",
      createdAt: "2022-08-24",
      type: 0, //0이면 상태변경, 1이면 콕찌르기
      champion: "아무무",
    };
    const tmpArray = [
      tmpNotice,
      tmpNotice,
      tmpNotice,
      tmpNotice,
      tmpNotice,
      tmpNotice,
      tmpNotice,
      tmpNotice,
      tmpNotice,
      tmpNotice,
      tmpNotice,
      tmpNotice,
    ];
    setNotices(tmpArray);
  };

  useEffect(() => {
    getMyNotice();
  }, []);

  return (
    <Container>
      <span>모두 지우기</span>
      <ItemBox>
        {notices ? (
          notices.map((notice, index) => (
            <NoticeBox
              index={index}
              profile={notice.profile}
              name={notice.name}
              createdAt={notice.createdAt}
              type={notice.type}
              champion={notice.champion}
            />
          ))
        ) : (
          <></>
        )}
      </ItemBox>
    </Container>
  );
}
