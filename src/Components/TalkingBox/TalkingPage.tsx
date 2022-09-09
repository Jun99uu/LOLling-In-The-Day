import { useState, useEffect } from "react";
import TalkingIndex from "./TalkingIndex";
import ChangeState from "./ChangeState";

export default function TalkingPage() {
  const [stage, setStage] = useState(0); //0은 선택창, 1은 상태변경, 2는 콕찌르기
  return (
    <>
      {stage === 0 ? (
        <TalkingIndex setCategory={setStage} />
      ) : stage === 1 ? (
        <ChangeState />
      ) : stage === 2 ? (
        <>콕찌르기</>
      ) : (
        <></>
      )}
    </>
  );
}
