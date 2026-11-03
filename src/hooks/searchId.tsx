import axiosInstance from "../libs/AxiosIntaces";

export const searchId = async (input: string) => {
  const response = await axiosInstance.get(`/searchId/${input}`);
  const datas = await response.data;
  return datas;
};
