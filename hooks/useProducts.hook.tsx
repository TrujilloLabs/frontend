import { Product } from "@/domain/Product";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export interface ProductsApiResponse {
  data: Product[];
  meta: any;
}

export const useProducts = () => {
  const [productsApiResponse, setProductsApiResponse] =
    useState<ProductsApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchProducts = async () => {
    try {
      setError(null);

      const result = await getProducts();
      setProductsApiResponse(result as unknown as ProductsApiResponse);
    } catch (err) {
      console.log(err);
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refreshProducts = async () => {
    setIsRefreshing(true);
    await fetchProducts();
  };

  return {
    products: productsApiResponse?.data ?? [],
    loading,
    error,
    isRefreshing,
    refreshProducts
  };
};
