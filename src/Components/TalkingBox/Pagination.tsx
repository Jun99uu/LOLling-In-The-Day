import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

interface pageProps {
  curIndex: number;
  setIndex: Dispatch<SetStateAction<number>>;
  lastIndex: number;
}

export default function Pagination(props: pageProps) {
  const { curIndex, setIndex, lastIndex } = props;
  return (
    <Container>
      <FontAwesomeIcon
        icon={faCaretLeft}
        style={{ fontSize: "20px", cursor: "pointer" }}
        onClick={() => setIndex((prev) => (prev === 0 ? prev : prev - 1))}
      />
      <span>{curIndex + 1}</span>
      <span>|</span>
      <span>{lastIndex}</span>
      <FontAwesomeIcon
        icon={faCaretRight}
        style={{ fontSize: "20px", cursor: "pointer" }}
        onClick={() =>
          setIndex((prev) => (prev === lastIndex - 1 ? prev : prev + 1))
        }
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding-right: 5px;
`;
