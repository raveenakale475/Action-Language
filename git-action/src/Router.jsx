import React from "react";
import { Routes, Route } from "react-router-dom";
import All from "./Components/All";
import Html from "./Components/Html";
import Css from "./Components/Css";
import JavaScript from "./Components/JavaScript";
import Navbar from "./Components/Navbar";

const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<JavaScript />} />
      </Routes>
    </div>
  );
};

export default Router;
