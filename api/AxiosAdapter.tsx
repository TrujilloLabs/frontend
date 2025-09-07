import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./HttpAdapter";

export class AxiosAdapter implements HttpAdapter {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 10000,
      headers: { "Content-Type": "application/json" }
    });

    // Interceptores
    this.instance.interceptors.request.use(async (config) => {
      // Aquí podrías inyectar el token
      // const token = await getToken();
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMGNkYWEzNy1lNjYwLTQ3MmItYTczMy1hMWZkNjFhZDhjNzIiLCJlbWFpbCI6IkdyZXlzb25fR2lzbGFzb243NEBleGFtcGxlLm5ldCIsInJvbGUiOiJhZG1pbl90aWVuZGEiLCJzdG9yZV9pZCI6IjlmZTYzYzJkLTE3MjEtNDQxNC05Yjg4LWZjNTcxMzhjZDgwMyIsImlhdCI6MTc1NzIwMDg1NSwiZXhwIjoxNzU3Mjg3MjU1fQ.bC5G4qrnCWNgFAxD7RdUQYj_tt6wzartwY_HvtL6HV8";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  async get<T>(url: string, options?: object): Promise<T> {
    const { data } = await this.instance.get<T>(url, options);
    return data;
  }

  async post<T>(url: string, body: any, options?: object): Promise<T> {
    const { data } = await this.instance.post<T>(url, body, options);
    return data;
  }

  async put<T>(url: string, body: any, options?: object): Promise<T> {
    const { data } = await this.instance.put<T>(url, body, options);
    return data;
  }

  async delete<T>(url: string, options?: object): Promise<T> {
    const { data } = await this.instance.delete<T>(url, options);
    return data;
  }
}
