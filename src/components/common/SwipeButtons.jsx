import React from "react";
import styled from "styled-components";
import backIcon from "../../assets/common/icn_back.svg";
import heartIcon from "../../assets/common/icn_heart.svg";
import thumbsIcon from "../../assets/common/icn_thumbs.svg";
import passIcon from "../../assets/common/icn_pass.svg";
import { useParams } from "react-router-dom";

const SwipeButtons = (data) => {
  function goBack(memberId) {
    console.log("Go Back");
  }

  function heart(memberId) {
    console.log("Heart");
  }

  function like(memberId) {
    console.log("Like");
  }

  function pass(memberId) {
    console.log("Pass");
  }

  return (
    <SLayout>
      <button
        onClick={() => {
          goBack(data.memberId);
        }}
      >
        <img src={backIcon} alt="Back Icon" />
      </button>
      <button
        onClick={() => {
          heart(data.memberId);
        }}
      >
        <img src={heartIcon} alt="Heart Icon" />
      </button>
      <button
        onClick={() => {
          like(data.memberId);
        }}
      >
        <img src={thumbsIcon} alt="Thumbs Icon" />
      </button>
      <button
        onClick={() => {
          pass(data.memberId);
        }}
      >
        <img src={passIcon} alt="Pass Icon" />
      </button>
    </SLayout>
  );
};

export default SwipeButtons;

const SLayout = styled.div`
  height: 136px;
  padding-left: 41px;
  padding-right: 41px;
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 53px;
    width: 53px;
    border-radius: 50%;
    margin-top: 32px;
    border: none;
    outline: none;
    background: #374356;
    transition: all 0.2s;

    &:hover {
      background: #5f6978;
    }
  }
`;
