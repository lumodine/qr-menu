import axios from "@/lib/axios"

const getDetail = async (alias: string) => {
  const { data } = await axios.get(`/qr-menu/${alias}`)

  return data
}

const getCategories = async (alias: string) => {
  const { data } = await axios.get(`/qr-menu/${alias}/categories`)

  return data
}

const getProducts = async (alias: string) => {
  const { data } = await axios.get(`/qr-menu/${alias}/products`)

  return data
}

export default {
  getDetail,
  getCategories,
  getProducts
}
