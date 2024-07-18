import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const LocationSettingPage = ({ signup, setSignup }) => {
  const navigate = useNavigate();

  const [selectedSido, setSelectedSido] = useState("");
  const [selectedGugun, setSelectedGugun] = useState("");
  const [gugunOptions, setGugunOptions] = useState([]);

  const [selectedLocations, setSelectedLocations] = useState(
    signup.partnerLocation || []
  );
  const [myLocation, setMyLocation] = useState(
    signup.location ? signup.location[0] : ""
  );
  const [myGugun, setMyGugun] = useState(
    signup.location ? signup.location[1] : ""
  );

  const areas = {
    서울특별시: [
      "종로구",
      "중구",
      "용산구",
      "성동구",
      "광진구",
      "동대문구",
      "중랑구",
      "성북구",
      "강북구",
      "도봉구",
      "노원구",
      "은평구",
      "서대문구",
      "마포구",
      "양천구",
      "강서구",
      "구로구",
      "금천구",
      "영등포구",
      "동작구",
      "관악구",
      "서초구",
      "강남구",
      "송파구",
      "강동구",
    ],
    // Add other cities and their districts here
  };

  useEffect(() => {
    if (selectedSido) {
      setGugunOptions(areas[selectedSido]);
      setSelectedGugun("");
    } else {
      setGugunOptions([]);
    }
  }, [selectedSido]);

  const handleAddLocation = () => {
    if (
      selectedGugun &&
      !selectedLocations.some((location) => location[1] === selectedGugun) &&
      selectedLocations.length < 3
    ) {
      setSelectedLocations([
        ...selectedLocations,
        [selectedSido, selectedGugun],
      ]);
      setSelectedGugun(""); // Reset gugun selection
    }
  };

  const handleRemoveLocation = (index) => {
    setSelectedLocations(selectedLocations.filter((_, i) => i !== index));
  };

  const handleMyLocationRemove = () => {
    setMyLocation("");
    setMyGugun("");
  };

  const handleNext = () => {
    setSignup({
      ...signup,
      location: [myLocation, myGugun],
      partnerLocation: selectedLocations,
    });
    navigate("/posting");
  };

  return (
    <SLayout>
      <SContainer>
        <STitle>위치 설정</STitle>
        <SContentContainer>
          <SLabel>내 위치 입력</SLabel>
          <Select
            value={myLocation}
            onChange={(e) => setMyLocation(e.target.value)}
          >
            <option value="">시/도 선택</option>
            {Object.keys(areas).map((sido) => (
              <option key={sido} value={sido}>
                {sido}
              </option>
            ))}
          </Select>

          <Select
            value={myGugun}
            onChange={(e) => setMyGugun(e.target.value)}
            disabled={!myLocation}
          >
            <option value="">구/군 선택</option>
            {myLocation &&
              areas[myLocation].map((gugun) => (
                <option key={gugun} value={gugun}>
                  {gugun}
                </option>
              ))}
          </Select>

          {myLocation && myGugun && (
            <LocationItem>
              내 위치: {myLocation} {myGugun}
              <Button
                btnInfo={{ text: "삭제", onClick: handleMyLocationRemove }}
                style={{ marginLeft: "10px", backgroundColor: "#dc3545" }}
              />
            </LocationItem>
          )}
        </SContentContainer>

        <SContentContainer>
          <SLabel>
            상대방의 위치 설정
            <p>최대 3개 선택 가능</p>
          </SLabel>
          <Select
            value={selectedSido}
            onChange={(e) => setSelectedSido(e.target.value)}
          >
            <option value="">시/도 선택</option>
            {Object.keys(areas).map((sido) => (
              <option key={sido} value={sido}>
                {sido}
              </option>
            ))}
          </Select>

          <Select
            value={selectedGugun}
            onChange={(e) => setSelectedGugun(e.target.value)}
            disabled={!selectedSido}
          >
            <option value="">구/군 선택</option>
            {gugunOptions.map((gugun) => (
              <option key={gugun} value={gugun}>
                {gugun}
              </option>
            ))}
          </Select>

          <Button btnInfo={{ text: "위치 추가", onClick: handleAddLocation }} />

          <LocationList>
            {selectedLocations.map((location, index) => (
              <LocationItem key={index}>
                {location[0]} {location[1]}
                <Button
                  btnInfo={{
                    text: "삭제",
                    onClick: () => handleRemoveLocation(index),
                  }}
                  style={{ marginLeft: "10px", backgroundColor: "#dc3545" }}
                />
              </LocationItem>
            ))}
          </LocationList>
        </SContentContainer>

        <SButtonContainer>
          <Button
            btnInfo={{
              text: "프로필 설정 완료",
              color: "black",
              onClick: handleNext,
            }}
          />
        </SButtonContainer>
      </SContainer>
    </SLayout>
  );
};

export default LocationSettingPage;

const SLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 345px;
  max-height: 80vh;
  padding: 20px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  overflow-y: auto;
`;

const STitle = styled.h2`
  background: var(--green-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  align-self: flex-start;
  margin: 0px;
`;

const SLabel = styled.label`
  margin-top: 10px;
  font-size: 16px;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  p {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const LocationList = styled.div`
  margin-top: 10px;
`;

const LocationItem = styled.div`
  margin: 5px 0;
  padding: 5px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: space-between;
`;

const SButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
