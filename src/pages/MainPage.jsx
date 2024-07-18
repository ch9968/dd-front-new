import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import SwipeButtons from "../components/SwipeButtons";
import styled from "styled-components";
import PersonService from "../services/PersonService";

const MainPage = () => {
  const [currentPerson, setCurrentPerson] = useState(PersonService.getPerson());

  const handleChange = () => {
    setCurrentPerson(PersonService.getPerson());
  };

  useEffect(() => {}, [currentPerson]);

  // Removed the Header Component and added a memberId attribute to swipeButtons.
  return (
    <MainCont>
      <Cards currentPerson={currentPerson} />
      <SwipeButtons memberId={1} onChange={handleChange} />
    </MainCont>
  );
};

const MainCont = styled.div`
  display: block;
`;

export default MainPage;
