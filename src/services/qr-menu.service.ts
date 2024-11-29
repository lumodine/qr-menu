import axios from "@/lib/axios"
import {
  Categories,
  Category,
  Tenant,
  Response,
  Products
} from "@/types"

const getDetail = async (alias: string) => {
  const { data } = await axios.get<Response<Tenant>>(`/qr-menu/${alias}`)

  return data
}

const getCategories = async (alias: string) => {
  const { data } = await axios.get<Response<Categories>>(`/qr-menu/${alias}/categories`)

  return data
}

const getCategoryById = async (alias: string, categoryId: string) => {
  const { data } = await axios.get<Response<Category>>(`/qr-menu/${alias}/categories/${categoryId}`)

  return data
}

const getProducts = async (alias: string, categoryId: string) => {
  const url = `/qr-menu/${alias}/categories/${categoryId}/products`
  const { data } = await axios.get<Response<Products>>(url)

  return data
}

export default {
  getDetail,
  getCategories,
  getCategoryById,
  getProducts
}
