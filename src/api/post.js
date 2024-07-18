import client from "./client";

export const postPost = async (formData) => {
  try {
    const response = await client.post("/join", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("프로필 업로드 에러", error);
    throw error;
  }
};
