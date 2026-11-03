import axiosInstance from "../libs/AxiosIntaces";

export interface dataPost {
  id: string;
  customerName: string;
  orderDate: string;
  paymentMethod: string;
  currentStatus: string;
  tshirt: {
    type: string;
    color: string;
    totalQty: number;
  };
  printing: {
    type: string;
    colors: string[];
    area: string;
  };
  shipping: {
    address: string;
  };
}

const postData = async (data: dataPost, url: string) => {
  const postData = await axiosInstance.post(url, data);
  return postData;
};

export default postData;
