import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import {
  RecoilRegisterStateState,
  RegisterStateInterface,
} from "../../States/RecoilRegisterStateState";

interface itemProps {
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

export default function CardItem(props: itemProps) {
  const {
    cardId,
    emotion,
    nation,
    name,
    image,
    title,
    subtitle,
    leftColor,
    rightColor,
    decoRes,
  } = props;

  const [recoilInfo, setRecoilInfo] = useRecoilState(RecoilRegisterStateState);
  const registerState: RegisterStateInterface = { ...recoilInfo };

  const goRegisterState = () => {
    const newRecoil: RegisterStateInterface = {
      state: true,
      cardId: cardId,
      leftColor: leftColor,
      rightColor: rightColor,

      title: title,
      subtitle: subtitle,
      decoRes: decoRes,
    };
    setRecoilInfo(newRecoil);
  };

  return (
    <Container url={image} onClick={() => goRegisterState()}>
      <NameCard>{name}</NameCard>
      <TitleCard>{title}</TitleCard>
    </Container>
  );
}

const Container = styled.div<{ url: string }>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const NameCard = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-weight: 800;
  padding: 5px 15px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  text-shadow: 2px 2px 6px black;
`;

const TitleCard = styled.div`
  max-width: 65%;
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 5px 10px;
  border-radius: 10px 0px 0px 0px;
  text-align: end;
  word-break: keep-all;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  text-shadow: 2px 2px 6px black;
  font-weight: 500;
`;
