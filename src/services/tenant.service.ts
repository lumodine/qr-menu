import axios from "@/lib/axios"

const getQrMenu = async (alias: string) => {
  const { data } = await axios.get(`/tenants/${alias}/qr-menu`)

  return data
}

export default {
  getQrMenu
}
