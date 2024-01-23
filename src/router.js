import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import NMain from "./나연님/Index";
import MSChallenges from "./민성님/Challenges";
import MMain from "./민성님/Index";
import JoMain from "./종한님/Index";
import JuMain from "./주희님/Index";
import JiMain from "./지상님/Index";
import HMain from "./회진님/Index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/na-yeon" element={<NMain />} />
        <Route path="/min-sung" element={<MMain />} />
        <Route path="/min-sung/challenges" element={<MSChallenges />} />
        <Route path="/ju-hee" element={<JuMain />} />
        <Route path="/jong-han" element={<JoMain />} />
        <Route path="/ji-sang" element={<JiMain />} />
        <Route path="/hoe-jin" element={<HMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
