import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import SubjectsSection from "./components/SubjectsSection";
import ChatSection from "./components/ChatSection";
import GameSection from "./components/GameSection";
import UniversitiesSection from "./components/UniversitiesSection";
import AppDownloadSection from "./components/AppDownloadSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <SubjectsSection />
      <GameSection />
      <ChatSection />
      <UniversitiesSection />
      <AppDownloadSection />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;