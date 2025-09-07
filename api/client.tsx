// import axios, {
//   AxiosInstance,
//   AxiosResponse,
//   InternalAxiosRequestConfig
// } from "axios";
// import * as SecureStore from "expo-secure-store";

// const api: AxiosInstance = axios.create({
//   baseURL: "https://tu-backend.com/api",
//   timeout: 10000
// });

// // Interceptor de solicitud
// api.interceptors.request.use(
//   async (
//     config: InternalAxiosRequestConfig
//   ): Promise<InternalAxiosRequestConfig> => {
//     try {
//       const token = await SecureStore.getItemAsync("auth_token"); // token seguro
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     } catch (error) {
//       console.error("Error al obtener el token:", error);
//       return Promise.reject(error);
//     }
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Interceptor de respuesta
// api.interceptors.response.use(
//   (response: AxiosResponse) => response.data,
//   (error) => {
//     console.error("API Error:", error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

// export default api;
