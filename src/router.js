import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import NMain from "./나연님/Index";
import MMain from "./민성님/Index";
import YMain from "./유경님/Index";
import JoMain from "./종한님/Index";
import JiMain from "./지상님/Index";
import HMain from "./회진님/Index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/na-yeon" element={<NMain />} />
        <Route path="/min-gyeong" element={<MMain />} />
        <Route path="/yu-gyeong" element={<YMain />} />
        <Route path="/jong-han" element={<JoMain />} />
        <Route path="/ji-sang" element={<JiMain />} />
        <Route path="/hoe-jin" element={<HMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
