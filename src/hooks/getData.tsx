import axiosInstance from "../libs/AxiosIntaces";
import type { OrderResponse } from "../components/fixedComponent/Table";

interface Response {
  status: number;
  data: OrderResponse[];
}

const getData = async (url: string) => {
  const response = await axiosInstance.get<Response>(url);
  return response.data;
};

export default getData;
