import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Main from "./Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./Themes/GlobalStyles";
import { RecoilRoot } from "recoil";
import Frame from "./Components/Frame";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyles />
      <Frame />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);
