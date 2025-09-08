import { AxiosAdapter } from "../api/AxiosAdapter";
import { HttpAdapter } from "../api/HttpAdapter";
import { Category } from "../domain/Category";
import { IProduct } from "../domain/Product";
import { Product } from '../interfaces/index';

const http: HttpAdapter = new AxiosAdapter("http://192.168.2.3:5000/api/v1");
// const http: HttpAdapter = new AxiosAdapter("http://localhost:5000/api/v1");
// 
export const getProducts = async (): Promise<IProduct[]> => {
    const data = await http.get<IProduct[]>("/product");
    // console.log("Data Productos 👀", data)
    return data;
};


export const getProductsByCategory = async (categoryId?: string, subcategoryId?: string,): Promise<Product[]> => {
    try {
        const data = await http.get<Product[]>(`/product/by-category`, {
            params: {
                categoryId: categoryId,
                subcategoryId: subcategoryId,
            },
        });
        console.log("Data Productos Category 👀 😀😀😁🚨🚨🚨🚨🚨🚨", data);
        return data;

    } catch (error) {
        console.error("Error fetching getProductsByCategory:", error);
        return [];
    }
};



// export const getProductsBySubcategory = async (subcategoryId: string): Promise<Product[]> => {
//     try {
//         const data = await http.get<Product[]>(`/product/by-category`, {
//             params: {
//                 subcategoryId: subcategoryId,
//             },
//         });
//         console.log("Data Productos Subcategori 👀 😀😀😁🚨🚨🚨🚨🚨🚨", data);
//         return data;

//     } catch (error) {
//         console.error("Error fetching getProductsBySubcategory:", error);
//         return [];
//     }
// };





export const getCategories = async (): Promise<Category[]> => {
    const data = await http.get<Category[]>("/categories");
    // console.log("data servicios 👀(●'◡'●)👀", data)
    return data;
};