import React, { useState, useEffect } from "react";
import styled from "styled-components";
import cat from "../../assets/common/cat.jpg";

const Cards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople([
      {
        partnerId: "2",
        name: "Kieran",
        age: "22",
        veganType: "비건",
        imageLink: cat,
        location1: "Seoul",
        location2: "Mapo",
        hobby1: "수영",
        hobby2: "찬희랑 놀기",
        hobby3: "자기",
      },
    ]);

    /*
    const fetchPeopleData = async () => {
      try {
        const response = await fetch("https://api.example.com/people"); 
        if (!response.ok) {
          throw new Error("네트워크 에러");
        }
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchPeopleData();
    */
  }, []);

  return (
    <SLayout>
      {people.map((person) => (
        <>
          <SCardContainer
            key={person.partnerId}
            style={{ backgroundImage: `url(${person.imageLink})` }}
          >
            <SCardWrapper className="card">
              <DetailsCont>
                <section>
                  <h1>{person.name}</h1>
                  <h2>{person.age}</h2>
                </section>
                <section>
                  <h3>{person.location2}</h3>
                  <h3>·</h3>
                  <h3>{person.veganType}</h3>
                </section>
              </DetailsCont>
            </SCardWrapper>
          </SCardContainer>
          <HobbyCont>
            <div>
              <h4>{person.hobby1}</h4>
            </div>
            <div>
              <h4>{person.hobby2}</h4>
            </div>
            <div>
              <h4>{person.hobby3}</h4>
            </div>
          </HobbyCont>
        </>
      ))}
    </SLayout>
  );
};

export default Cards;

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

const HobbyCont = styled.div`
  display: block;
  padding-left: 33px;

  div {
    border: 1px solid #d9d9d9;
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
