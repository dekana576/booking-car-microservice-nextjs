import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const createInstance = (withAuth: boolean = true) => {
  const instance = axios.create({
    baseURL: `${process.env.API_BASE_URL_USER}`,
    timeout: 30000,
  });

  instance.interceptors.request.use(async (request) => {
    request.headers["Content-Type"] = "application/json";
    return request;
  });

  return instance;
};


export const AxiosInstance = async<T = any>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const instance = createInstance(false);
  return instance(config);
};
