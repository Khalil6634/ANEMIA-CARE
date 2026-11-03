import axiosInstance from "../libs/AxiosIntaces";

const getDataBystatus = async (status: string, url: string) => {
  const dataByStatus = await axiosInstance.get(url, {
    params: {
      status: status,
    },
  });
  return dataByStatus.data;
};

export default getDataBystatus;
