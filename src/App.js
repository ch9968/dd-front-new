import { Routes, Route } from "react-router-dom";
import usestate from "react";
import styled from "styled-components";
import React from "react";

import StartPage from "./pages/StartPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import PostingPage from "./pages/PostingPage";
import MainPage from "./pages/MainPage";
import MessagePage from "./pages/MessagePage";
import StatusBarComponent from "./components/StatusBar";

const App = () => {
  function getCurrentUserId() {}

  return (
    <AppCont>
      <StatusBarComponent></StatusBarComponent>
      {/* <NavComponent></NavComponent> */}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post" element={<PostingPage />} />
        <Route path="/main/:userId" element={<MainPage />} />
        <Route path="/message" element={<MessagePage />} />
        {/* <Route path="/matches/:userId" element={<MatchPage />} /> */}
      </Routes>
    </AppCont>
  );
};

const AppCont = styled.div`
  position: relative;
  width: 375px;
  height: 664px;
  margin: 0 auto;
  background-color: var(--black);
  box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.4);
`;

export default App;
