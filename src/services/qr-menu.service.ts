import axios from "@/lib/axios";

const getDetail = async (alias: string) => {
  const {data} = await axios.get(`/qr-menu/${alias}`);

  return data;
};

export default {
  getDetail,
};
