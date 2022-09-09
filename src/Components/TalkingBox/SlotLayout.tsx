import { useState, useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { emotions, nations } from "../../Resources/Emotions";
import SlotItem from "./SlotItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface slotProps {
  category: boolean;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

interface Emotion {
  emoji: string;
  emotion: string;
}

export default function SlotLayout(props: slotProps) {
  const { category, activeIndex, setActiveIndex } = props;
  const [Emotions, setEmotions] = useState<Array<Emotion>>(emotions);

  useEffect(() => {
    category ? setEmotions(nations) : setEmotions(emotions);
  }, [category]);

  const getIndex = (index: number, activeIndex: number): number => {
    const gap = index - activeIndex;
    if (gap === 0) return 2;
    else if (gap === 1 || gap === -1) return 3;
    else if (gap === 2 || gap === -2) return 4;
    else return 5;
  };

  const handleClick = (direction: string) => {
    if (direction === "prev") {
      activeIndex !== 0
        ? setActiveIndex((prev) => prev - 1)
        : setActiveIndex((prev) => prev);
    } else {
      activeIndex !== Emotions.length - 1
        ? setActiveIndex((prev) => prev + 1)
        : setActiveIndex((prev) => prev);
    }
  };

  return (
    <Container>
      <ArrowButton onClick={() => handleClick("prev")}>
        <FontAwesomeIcon icon={faAngleUp} />
      </ArrowButton>
      <Slides activeIndex={activeIndex}>
        {Emotions.map((emotion, index) => (
          <EmotionBox
            index={getIndex(index, activeIndex)}
            key={emotion.emotion}
            onClick={() => setActiveIndex(index)}
          >
            <SlotItem emoji={emotion.emoji} emotion={emotion.emotion} />
          </EmotionBox>
        ))}
      </Slides>
      <ArrowButton
        onClick={() => handleClick("next")}
        style={{ marginTop: "16px" }}
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  & > .third {
    z-index: 1;
    filter: brightness(80%);
    transform: scale(0.9);
  }

  & > .second {
    z-index: 2;
    filter: brightness(90%);
    transform: scale(0.9);
  }

  & > .first {
    z-index: 3;
  }
`;

const Slides = styled.div<{ activeIndex: number }>`
  height: 400px;
  position: relative;
  padding-top: ${(props) =>
    props.activeIndex === 1 ? 130 : props.activeIndex === 0 ? 200 : 60}px;
`;

const EmotionBox = styled.div<{ index: number }>`
  width: 130px;
  height: 130px;
  margin-top: -60px;
  z-index: ${(props) =>
    props.index === 0 || props.index === 4
      ? "1"
      : props.index === 1 || props.index === 3
      ? "2"
      : props.index === 2
      ? "3"
      : "4"};
  transform: scale(
    ${(props) =>
      props.index === 0 || props.index === 4
        ? "0.85"
        : props.index === 1 || props.index === 3
        ? "0.9"
        : props.index === 2
        ? "1"
        : ""}
  );
  filter: ${(props) =>
    props.index === 0 || props.index === 4
      ? "brightness(80%)"
      : props.index === 1 || props.index === 3
      ? "brightness(90%)"
      : props.index === 2
      ? ""
      : ""};
  display: ${(props) => ([0, 1, 2, 3, 4].includes(props.index) ? "" : "none")};
  transition: transform 0.4s ease, opacity 0.4s ease;
  position: relative;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;
  transition: all 0.15s;

  &:hover {
    transform: scale(1.2);
  }
`;
