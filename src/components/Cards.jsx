import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cards = ({currentPerson}) => {

  // useEffect(() => {
  //   const fetchPeopleData = async () => {
  //     try {
  //       const response = await fetch("https://api.example.com/people"); 
  //       if (!response.ok) {
  //         throw new Error("네트워크 에러");
  //       }
  //       const data = await response.json();
  //       setPeople(data);
  //     } catch (error) {
  //       console.error("데이터 가져오기 실패:", error);
  //     }
  //   };

  //   fetchPeopleData();
  // }, []);

  /* 
    Added some more styled divs to help break up the page 
    and make it easier to style. See more details on each below.
  */
  return (
    <SLayout>
        <SCardContainer 
          key={currentPerson.partnerId}
          style={{ backgroundImage: `url(${currentPerson.imageLink})` }}
        >
          <SCardWrapper className="card">
            <DetailsCont>
              <section>
                <h1>{currentPerson.name}</h1>
                <h2>{currentPerson.age}</h2>
              </section>
              <section>
                <h3>{currentPerson.location2}</h3>
                <h3>·</h3>
                <h3>{currentPerson.veganType}</h3>
              </section>
            </DetailsCont>
          </SCardWrapper>
        </SCardContainer>
        <HobbyCont>
          <div>
            <h4>{currentPerson.hobby1}</h4>
          </div>
          <div>
            <h4>{currentPerson.hobby2}</h4>
          </div>
          <div>
            <h4>{currentPerson.hobby3}</h4>
          </div>
        </HobbyCont>
    </SLayout>
  );
};

const SLayout = styled.div`
  display: block;
  justify-content: center;
`;

const SCardContainer = styled.div`
  position: relative;
  margin: auto;
  border-radius: 30px !important;
  width: 340px;
  height: 400px;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
`;

const SCardWrapper = styled.div`
  width: 340px;
  height: 400px;
  background: linear-gradient(180deg, rgba(51, 51, 51, 0) 51.24%, #000000 100%);
`;

/* 
  Details Container is the group of the potential matches base details
  like name, age, location, and vegan type.
*/
const DetailsCont = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;

  section {
    display: flex;
    align-items: center;
    height: fit-content;
    width: 100%;
    padding-left: 15px;
    padding-bottom: 8px;
    padding-top: 2px;

    h1 {
      margin: 0;
      padding-right: 10px;
      color: #fff;
      font-family: var(--big-font-family);
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
    h2 {
      margin: 0;
      margin-bottom: -3px;
      color: #fff;
      font-family: var(--small-font-family);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
    h3 {
      margin: 0;
      padding-right: 8px;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
  }
`;

// The hobby Container holds the hobby capsules that go underneath the card
const HobbyCont = styled.div`
  display: block;
  padding-left: 33px;

  div {
    border: 1px solid #D9D9D9;
    border-radius: 30px;
    min-width: 75px;
    width: fit-content;
    float: left;
    margin-right: 10px;

    h4 {
      margin: 0;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 2px;
      padding-bottom: 2px;
      color: #d9d9d9;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
  }
  
`;

export default Cards;