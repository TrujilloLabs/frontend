import { Product } from "@/domain/Product";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

// Define la interfaz para la respuesta completa de la API
interface ProductsApiResponse {
  data: Product[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const useProducts = () => {
  const [productsApiResponse, setProductsApiResponse] =
    useState<ProductsApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // La función getProducts() debe devolver la respuesta completa del API
        const results = await getProducts();
        setProductsApiResponse(results);
      } catch (err) {
        setError("Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const result = await getProducts();
  //       setProducts(result.data);
  //     } catch (err) {
  //       setError("Error al cargar productos");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // return { products, loading, error };
  return { products: productsApiResponse?.data ?? [], loading, error };
};
