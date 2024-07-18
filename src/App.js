import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import React from "react";
import LocationSettingPage from "./pages/LocationSettingPage";
import StartPage from "./pages/StartPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import PostingPage from "./pages/PostingPage";
import MainPage from "./pages/MainPage";
import MessagePage from "./pages/MessagePage";
import StatusBarComponent from "./components/StatusBar";

const App = () => {
  function getCurrentUserId() {}
  const [signup, setSignup] = useState({
    userId: "",
    nickname: "",
    password: "",
    name: "",
    age: "",
    gender: "",
    partnerGender: "",
    veganState: null,
    hobby: [],
    location: [],
    partnerLocation: [],
  });
  return (
    <AppCont>
      <StatusBarComponent></StatusBarComponent>
      {/* <NavComponent></NavComponent> */}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/signup"
          element={<SignUpPage signup={signup} setSignup={setSignup} />}
        />
        <Route
          path="/posting"
          element={<PostingPage signup={signup} setSignup={setSignup} />}
        />
        <Route
          path="/location-setting"
          element={
            <LocationSettingPage signup={signup} setSignup={setSignup} />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main/:userId" element={<MainPage />} />
        <Route path="/message" element={<MessagePage />} />
        <Route path="/location" element={<LocationSettingPage />} />
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
