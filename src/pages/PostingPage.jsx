import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postPost } from "../api/post";
import Button from "../components/common/Button";

const PostingPage = ({ signup, setSignup }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const PostPost = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", signup.id);
      formData.append("nickname", signup.nickname);
      formData.append("password", signup.pw);
      formData.append("name", signup.name);
      formData.append(
        "age",
        new Date().getFullYear() - new Date(signup.birthdate).getFullYear()
      );
      formData.append("gender", signup.gender);
      formData.append("partnerGender", signup.preferredGender);
      formData.append("veganState", signup.vegan);
      signup.hobbies.forEach((hobby) => formData.append("hobby", hobby));
      formData.append("location", signup.location.join(","));
      signup.partnerLocation.forEach((location) =>
        formData.append("partnerLocation", location.join(","))
      );

      try {
        const res = await postPost(formData);
        console.log("회원가입 결과", res);
        if (res.status === 201) {
          alert("프로필 사진 업로드 성공!");
          navigate("/");
        }
      } catch (error) {
        setError("사진 업로드에 실패했습니다. 다시 시도해주세요.");
        console.error("Error uploading profile data", error);
      }
    } else {
      setError("사진을 선택해주세요.");
    }
  };

  return (
    <SLayout>
      <SContainer>
        <STitle>프로필 설정</STitle>
        <SSubtitle>마음에 드는 사진을 추가해 보세요</SSubtitle>
        <SForm onSubmit={PostPost}>
          {error && <SErrorMessage>{error}</SErrorMessage>}
          <SImageContainer>
            <SInputLabel>
              {file ? (
                <SImage src={URL.createObjectURL(file)} alt="프로필 사진" />
              ) : (
                <SPlus>+</SPlus>
              )}
              <SInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </SInputLabel>
          </SImageContainer>
          <SButtonContainer>
            <Button
              btnInfo={{
                text: "프로필 설정 완료",
                color: "black",
                onClick: PostPost,
              }}
              type="submit"
            />
          </SButtonContainer>
        </SForm>
      </SContainer>
    </SLayout>
  );
};

export default PostingPage;

const SLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  color: #fff;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 345px;
  max-height: 80vh;
  padding: 20px;
  border-radius: 10px;
  overflow-y: auto;
`;

const STitle = styled.h1`
  font-size: 24px;
  color: #00ff00;
`;

const SSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border: 2px dashed #00ff00;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const SInputLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

const SInput = styled.input`
  display: none;
`;

const SImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const SPlus = styled.span`
  font-size: 100px;
  color: #00ff00;
`;

const SButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
