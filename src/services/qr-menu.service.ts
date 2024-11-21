import axios from "@/lib/axios"

const getDetail = async (alias: string) => {
  const { data } = await axios.get(`/qr-menu/${alias}`)

  return data
}

const getCategories = async (alias: string) => {
  const { data } = await axios.get(`/qr-menu/${alias}/categories`)

  return data
}

const getCategoryById = async (alias: string, categoryId: string) => {
  const { data } = await axios.get(`/qr-menu/${alias}/categories/${categoryId}`)

  return data
}

const getProducts = async (alias: string, categoryId: string) => {
  const url = `/qr-menu/${alias}/categories/${categoryId}/products`
  const { data } = await axios.get(url)

  return data
}

export default {
  getDetail,
  getCategories,
  getCategoryById,
  getProducts
}
