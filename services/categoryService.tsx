import { Subcategory } from "@/interfaces";
import { AxiosAdapter } from "../api/AxiosAdapter";
import { HttpAdapter } from "../api/HttpAdapter";

const http: HttpAdapter = new AxiosAdapter("http://172.28.128.1:5000/api/v1");
// const http: HttpAdapter = new AxiosAdapter("http://192.168.2.3:5000/api/v1");
//
// 🚨 La función ahora recibe 'categoryId' como parámetro
export const getSubcategoriesByCategory = async (
  categoriId: string
): Promise<Subcategory[]> => {
  try {
    const data = await http.get<Subcategory[]>(
      `/categories/${categoriId}/subcategories`
    );
    console.log("data servicios subcategories 👀(●'◡'●)👀", data);
    return data;
  } catch (error) {
    // console.error("Error fetching subcategories:", error);
    return [];
  }
};
