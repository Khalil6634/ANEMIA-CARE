import axiosInstance from "../libs/AxiosIntaces";

const setStatus = async (url:string) => {
  const setStatusAPI = await axiosInstance.patch(url);
  return setStatusAPI.data;
};

export default setStatus;
