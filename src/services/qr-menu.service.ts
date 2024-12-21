import type {Tenant, Response} from "@/types";
import axios from "@/lib/axios";

const getDetail = async (alias: string) => {
  const {data} = await axios.get<Response<Tenant>>(`/qr-menu/${alias}`);

  return data;
};

const getItems = async (alias: string) => {
  const {data} = await axios.get<Response<any[]>>(`/qr-menu/${alias}/items`);

  return data;
};

const getItemById = async (alias: string, itemId: string) => {
  const {data} = await axios.get<Response<any>>(`/qr-menu/${alias}/items/${itemId}`);

  return data;
};

const getSubItems = async (alias: string, itemId: string) => {
  const url = `/qr-menu/${alias}/items`;
  const params = {
    itemId,
  };
  const {data} = await axios.get<Response<any[]>>(url, {params});

  return data;
};

const getAllAnnouncements = async (alias: string) => {
  const {data} = await axios.get<Response<any[]>>(`/qr-menu/${alias}/announcements`);

  return data;
};

export default {
  getDetail,
  getItems,
  getItemById,
  getSubItems,
  getAllAnnouncements,
};
