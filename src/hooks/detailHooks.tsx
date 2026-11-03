import axiosInstance from "../libs/AxiosIntaces";

interface datas {
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

interface responseData {
  status: boolean;
  statusCode: number;
  datas: datas;
}

const getDetailProduct = async (id: string) => {
  const datas = await axiosInstance.get<responseData>(`/orders`, {
    params: {
      id: id,
    },
  });
  const datares = await datas.data;
  return datares;
};

export default getDetailProduct;
