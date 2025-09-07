import { AxiosAdapter } from "../api/AxiosAdapter";
import { HttpAdapter } from "../api/HttpAdapter";
import { Category } from "../domain/Category";
import { Product } from "../domain/Product";

const http: HttpAdapter = new AxiosAdapter("http://192.168.2.3:5000/api/v1");
// const http: HttpAdapter = new AxiosAdapter("http://localhost:5000/api/v1");

export const getProducts = async (): Promise<Product[]> => {
    const data = await http.get<Product[]>("/product");
    // console.log("Data Productos 👀", data)
    return data;
};


export const getCategories = async (): Promise<Category[]> => {
    const data = await http.get<Category[]>("/categories");
    console.log("data servicios", data)
    return data;
};