import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postPost } from "../api/post";
import Button from "../components/common/Button";

const PostingPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await postPost(formData);
        console.log("Profile picture upload result:", res);
        if (res.status === 201) {
          alert("프로필 사진 업로드 성공!");
          navigate("/");
        }
      } catch (error) {
        alert("사진 업로드에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("사진을 선택해주세요.");
    }
  };

  return (
    <SLayout>
      <SContainer>
        <STitle>프로필 설정</STitle>
        <SSubtitle>마음에 드는 사진을 추가해 보세요</SSubtitle>
        <SForm onSubmit={handleSubmit}>
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
                onClick: handleSubmit,
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
