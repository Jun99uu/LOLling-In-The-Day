import { emotions, nations } from "../../Resources/Emotions";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import Pagination from "./Pagination";

interface cardProps {
  category: boolean; //false가 감정별 | true가 챔피언별
  activeIndex: number;
}

interface cardItem {
  cardId: number;
  emotion: string;
  nation: string;
  name: string;
  image: string;
  title: string;
  subtitle: string;
  leftColor: string;
  rightColor: string;
  decoRes: string;
}

const Jinx: cardItem = {
  cardId: 0,
  emotion: "신남",
  nation: "자운",
  name: "Jinx",
  image:
    "https://w.namu.la/s/7732e6b2dd01706dc0d59646d71f0860277b8d88bfc0e4e99b688f22d421baaf189f47644b4eb0f9e0829e9889b30be15b8c0756b5bb4528d7c784c2481e96f9099a8a28c60cd8c92335990643b9f3c4e0312cbee2f2c3c8755e00503d033f886cafb5a3aa15b548e0322c0fc94d4d99",
  title: "야호! 징크스처럼 신나게 노는 날이래요!",
  subtitle: "미친듯이 놀아보아요.",
  leftColor: "#75167C",
  rightColor: "#166481",
  decoRes: "https://cdn-icons-png.flaticon.com/512/71/71270.png",
};

const Xayah: cardItem = {
  cardId: 1,
  emotion: "신남",
  nation: "아이오니아",
  name: "Xayah",
  image:
    "https://w.namu.la/s/737b4fbc2a981728b8200355e215c2c53937440b42051d86ca049d42d6717031b2b42e0c74e50a14c161a5ab4d7919aadf0f415e26801d34d5e0a9b25ad4611a987736e63aa479c9560e92c4a4174e28418019ff5cf50da0fba996f84a5146c5c91a35c7353f78a35c455c36e5af466a",
  title: "댄스파티에 가고 싶은 날이래요.",
  subtitle: "파티에 제가 빠질 수는 없죠.",
  leftColor: "#AD3E68",
  rightColor: "#232236",
  decoRes: "https://www.pngarts.com/files/3/Feather-PNG-Free-Download-1.png",
};

const Zoe: cardItem = {
  cardId: 2,
  emotion: "게으름",
  nation: "타곤",
  name: "Zoe",
  image:
    "https://w.namu.la/s/69d8cddb71d281ea3c2b86c98f6af1deb35ff0248d197a08eacb396feb8deb74119e32184f747d3b4c446280e789eeb39e32c4d9d8e5b25708f6955b86fd6b608c91bc2d969ab32c1e374473a06229ed4bc50f6fdc86999b4bdddd150fc2f937f714ce9b4242571146bbf0b3cc750ef7",
  title: "조이의 헤롱헤롱 쿨쿨 방울을 맞았나봐요.",
  subtitle: "이 시간에 자는게 정상은 아닌데 말이죠.",
  leftColor: "#391E83",
  rightColor: "#FE92F3",
  decoRes:
    "https://mblogthumb-phinf.pstatic.net/20121206_267/waawo_1354784632499alJzD_PNG/cc7_anwansoon.png?type=w2",
};

const Teemo: cardItem = {
  cardId: 3,
  emotion: "게으름",
  nation: "밴들시티",
  name: "Teemo",
  image:
    "https://w.namu.la/s/8b80d23652706ffecd67d3b11f0b717422132c2086ea06a36d3e9c9e385a45cd73ffaa22bbd5c0fb7ee3e30d89a7e4eed474e4c85cacd12893e8a45d324af2242aa8b71e0e5d582bed30dbde39ee9bfe2e047b21c629d122f9bab87ae0368d40fb4fb09edb350bb89ab4fc63e091986b",
  title: "오늘은 1티모미터도 움직일 수 없는 날이래요.",
  subtitle: "그런날도 있어야죠.",
  leftColor: "#446239",
  rightColor: "#D6692B",
  decoRes:
    "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/68416/mushrooms-clipart-xl.png",
};

const dummy: Array<cardItem> = [
  Jinx,
  Jinx,
  Xayah,
  Xayah,
  Zoe,
  Zoe,
  Teemo,
  Teemo,
];

const dummyCardItems: Array<cardItem> = [
  Jinx,
  Jinx,
  Jinx,
  Jinx,
  Jinx,
  Jinx,
  Xayah,
  Xayah,
  Xayah,
  Xayah,
  Xayah,
  Xayah,
  Zoe,
  Zoe,
  Zoe,
  Zoe,
  Zoe,
  Teemo,
  Teemo,
  Teemo,
  Teemo,
  Teemo,
  Teemo,
];

export default function CardLayout(props: cardProps) {
  const { category, activeIndex } = props;
  const [items, setItems] = useState<Array<Array<cardItem>>>();
  const [pageIndex, setPageIndex] = useState(0);

  const cutArray = (array: Array<cardItem>) => {
    const customArr: Array<Array<cardItem>> = [];
    while (array.length > 0) {
      const newArr = array.splice(0, 8);
      customArr.push(newArr);
    }
    setItems(customArr);
  };

  useEffect(() => {
    cutArray(dummyCardItems);
  }, []);

  return (
    <Container>
      <UpperBox>
        <TitleBox>
          <span>
            {category
              ? nations[activeIndex].emotion
              : emotions[activeIndex].emotion}
          </span>
          <span>
            {category
              ? nations[activeIndex].emoji
              : emotions[activeIndex].emoji}
          </span>
        </TitleBox>
        {category ? (
          <SearchBox onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="챔피언 이름으로 검색하세요" />
            <button>검색</button>
          </SearchBox>
        ) : (
          <></>
        )}
      </UpperBox>
      <Page>
        {items ? (
          items[pageIndex].map((item, index) => (
            <CardItem
              key={`${item.cardId}-${index}`}
              cardId={item.cardId}
              emotion={item.emotion}
              nation={item.nation}
              name={item.name}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              leftColor={item.leftColor}
              rightColor={item.rightColor}
              decoRes={item.decoRes}
            />
          ))
        ) : (
          <>d없어</>
        )}
      </Page>
      <PaginationBox>
        {items ? (
          <Pagination
            curIndex={pageIndex}
            setIndex={setPageIndex}
            lastIndex={items.length}
          />
        ) : (
          <></>
        )}
      </PaginationBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const UpperBox = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleBox = styled.div`
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  font-weight: 700;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;

  & > input {
    border: 1px solid white;
    border-radius: 5px;
    width: 270px;
    background: none;
    height: 25px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 2px 0px 0px 5px;
    color: white;
  }

  & > button {
    background-color: white;
    border: none;
    border-radius: 5px;
    color: black;
    font-weight: 800;
    cursor: pointer;
  }
`;

const Page = styled.div`
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 2%;
  column-gap: 2%;
`;

const PaginationBox = styled.div`
  width: 100%;
  height: 7%;
  align-self: center;
  justify-self: end;
`;
