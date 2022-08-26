import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faWindowMinimize,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
// import { ipcRenderer } from "electron";

export default function Frame() {
  //   const ipc = ipcRenderer;
  const minimize = () => {
    // ipc.send("minimizeApp");
  };
  const maximize = () => {
    // ipc.send("maximizeApp");
  };
  const close = () => {
    // ipc.send("closeApp");
  };
  return (
    <Container>
      <span className="prevent-select">LOLling In The Day</span>
      <div className="prevent-select">
        <span className="btn" onClick={() => minimize()}>
          <FontAwesomeIcon icon={faWindowMinimize} />
        </span>
        <span className="btn" onClick={() => maximize()}>
          <FontAwesomeIcon icon={faWindowMaximize} />
        </span>
        <span className="btn" onClick={() => close()}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #b3b3b3;
  padding: 10px 20px 5px 20px;
  font-size: 14px;
  -webkit-app-region: drag;
  position: absolute;
  z-index: 99;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    & > .btn {
      cursor: pointer;
    }
  }

  & span {
    transition: all 0.15s;
  }

  & span:hover {
    color: white;
  }

  & > .prevent-select {
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }
`;
