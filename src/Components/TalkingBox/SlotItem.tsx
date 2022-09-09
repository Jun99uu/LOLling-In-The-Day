import styled from "styled-components";

interface slotProps {
  emoji: string;
  emotion: string;
}

export default function SlotItem(props: slotProps) {
  const { emoji, emotion } = props;
  return (
    <Box>
      <span className="emoji">{emoji}</span>
      <span className="emotion">{emotion}</span>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  & > .emoji {
    font-size: 2em;
  }

  & > .emotion {
    font-size: 1em;
    font-weight: 700;
    color: black;
  }
`;
