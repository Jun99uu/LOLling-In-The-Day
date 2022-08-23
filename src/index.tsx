import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Main from "./Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./Themes/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
