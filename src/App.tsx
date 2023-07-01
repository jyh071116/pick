import Main from "./pages/Main";
import Start from "./pages/Start";

import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
