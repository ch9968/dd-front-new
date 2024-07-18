import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postRegister } from "../api/user";
import Button from "../components/common/Button";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    id: "",
    pw: "",
    nickname: "",
    birthdate: "",
    gender: "",
    preferredGender: "",
    vegan: "",
    hobbies: [],
  });

  const onChangeSignup = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const onChangeHobbies = (e) => {
    const { value } = e.target;
    setSignup((prev) => ({
      ...prev,
      hobbies: prev.hobbies.includes(value)
        ? prev.hobbies.filter((hobby) => hobby !== value)
        : [...prev.hobbies, value],
    }));
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const {
      id,
      pw,
      nickname,
      birthdate,
      gender,
      preferredGender,
      vegan,
      hobbies,
    } = signup;
    try {
      const res = await postRegister(
        id,
        pw,
        nickname,
        birthdate,
        gender,
        preferredGender,
        vegan,
        hobbies
      );
      if (res.status === 200) {
        alert("회원가입 성공! 로그인을 진행해주세요.");
        navigate("/login");
        setSignup({
          id: "",
          pw: "",
          nickname: "",
          birthdate: "",
          gender: "",
          preferredGender: "",
          vegan: "",
          hobbies: [],
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <SLayout>
      <SContainer>
        <STitle>회원가입</STitle>
        <SForm onSubmit={handleSignUpSubmit}>
          <SContentContainer>
            <SLabel>
              <h2>아이디</h2>
            </SLabel>
            <SInput
              type="text"
              value={signup.id}
              name="id"
              onChange={onChangeSignup}
            />
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <h2>비밀번호</h2>
            </SLabel>
            <SInput
              type="password"
              value={signup.pw}
              name="pw"
              onChange={onChangeSignup}
            />
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <h2>생년월일</h2>
            </SLabel>
            <SInput
              type="date"
              value={signup.birthdate}
              name="birthdate"
              onChange={onChangeSignup}
            />
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <h2>나의 성별</h2>
            </SLabel>
            <SRadioContainer>
              {["여성", "남성", "선택 안함"].map((gender) => (
                <SRadioLabel
                  key={gender}
                  className={signup.gender === gender ? "active" : ""}
                >
                  <SRadio
                    type="radio"
                    value={gender}
                    name="gender"
                    checked={signup.gender === gender}
                    onChange={onChangeSignup}
                  />
                  {gender}
                </SRadioLabel>
              ))}
            </SRadioContainer>
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <h2>선호하는 성별</h2>
            </SLabel>
            <SRadioContainer>
              {["여성", "남성", "선택 안함"].map((preferredGender) => (
                <SRadioLabel
                  key={preferredGender}
                  className={
                    signup.preferredGender === preferredGender ? "active" : ""
                  }
                >
                  <SRadio
                    type="radio"
                    value={preferredGender}
                    name="preferredGender"
                    checked={signup.preferredGender === preferredGender}
                    onChange={onChangeSignup}
                  />
                  {preferredGender}
                </SRadioLabel>
              ))}
            </SRadioContainer>
          </SContentContainer>

          <SContentContainer>
            <SLabel>
              <h2>About me</h2>
              <p>당신은 어떤 타입인가요?</p>
            </SLabel>
            <SRadioContainer>
              {[
                "비건",
                "락토",
                "오보",
                "락토-오보",
                "페스코",
                "폴로",
                "채식 지향",
              ].map((vegan) => (
                <SRadioLabel
                  key={vegan}
                  className={signup.vegan === vegan ? "active" : ""}
                >
                  <SRadio
                    type="radio"
                    value={vegan}
                    name="vegan"
                    checked={signup.vegan === vegan}
                    onChange={onChangeSignup}
                  />
                  {vegan}
                </SRadioLabel>
              ))}
            </SRadioContainer>
          </SContentContainer>
          <SContentContainer>
            <SLabel>
              <p>취미/관심사는 무엇인가요?</p>
            </SLabel>
            <SCheckboxContainer>
              {[
                "강아지",
                "스키",
                "연결",
                "환경",
                "디자인",
                "글쓰기",
                "음악",
                "영화",
              ].map((hobby) => (
                <SCheckboxLabel
                  key={hobby}
                  className={signup.hobbies.includes(hobby) ? "active" : ""}
                >
                  <SCheckbox
                    type="checkbox"
                    value={hobby}
                    checked={signup.hobbies.includes(hobby)}
                    onChange={onChangeHobbies}
                    style={{ fontSize: "12px" }}
                  />
                  {hobby}
                </SCheckboxLabel>
              ))}
            </SCheckboxContainer>
          </SContentContainer>
          <SButtonContainer>
            <Button
              btnInfo={{
                text: "회원가입",
                color: "black",
                onClick: handleSignUpSubmit,
              }}
              type="submit"
            />
          </SButtonContainer>
        </SForm>
      </SContainer>
    </SLayout>
  );
};

export default SignUpPage;

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

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const SInput = styled.input`
  width: 325px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 5px;
  border-radius: 30px;
  border: 1px solid #ccc;
  background-color: black;
  color: #fff;
  font-size: 13px;
  &::-webkit-calendar-picker-indicator {
    filter: invert(1) grayscale(1) brightness(0.5);
  }
`;

const SRadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

const SRadioLabel = styled.label`
  margin-top: 10px;
  font-size: 16px;
  display: flex;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 28px;
  background-color: black;
  padding-top: 3px;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background: var(--green-gradient);
    color: #000;
  }
`;

const SRadio = styled.input`
  display: none;
`;

const SContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
`;

const SCheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SCheckboxLabel = styled.label`
  margin-top: 10px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 28px;
  padding-top: 3px;
  background-color: black;
  border-radius: 30px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background: var(--green-gradient);
    color: #000;
  }
`;

const SCheckbox = styled.input`
  display: none;
  font-size: 13px;
`;

const SButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
