import axios, {AxiosInstance} from "axios";

// Server-side uses API_URL (for Docker internal network)
// Client-side uses NEXT_PUBLIC_API_URL (for browser access)
const getBaseURL = () => {
  if (typeof window === "undefined") {
    return process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
  }
  return process.env.NEXT_PUBLIC_API_URL;
};

const api: AxiosInstance = axios.create({
  baseURL: getBaseURL(),
  timeout: 5000,
});

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const fetcher = async (url: string) => {
  const {data} = await api.get(url);

  return data;
};

export default api;
