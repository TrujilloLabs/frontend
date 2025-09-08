// src/hooks/useFetchCategoryData.ts

import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

import { getSubcategoriesByCategory } from "@/services/categoryService";

import { getProductsByCategory } from "@/services/productService";
import { Product, Subcategory } from "../interfaces/index";

// Define la interfaz para los datos que el hook devolverá
interface FetchDataResult {
  subcategories: Subcategory[];
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const useFetchCategoryData = (): FetchDataResult => {
  const { categoryId, subcategoryId } = useLocalSearchParams();
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (
          typeof categoryId !== "string" &&
          typeof subcategoryId !== "string"
        ) {
          console.error("No se proporcionó un ID de categoría o subcategoría.");
          setError("No se proporcionó un ID de categoríao subCategoria");
          setLoading(false);
          return;
        }

        const subcatData = await getSubcategoriesByCategory(
          categoryId as string
        );

        const productsData = await getProductsByCategory(
          categoryId as string,
          subcategoryId as string
        );

        const subcategoriesWithIcons = subcatData.map((subcat) => ({
          ...subcat,
          icon: "💊"
        }));

        setSubcategories(subcategoriesWithIcons);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Ocurrió un error al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoryId, subcategoryId]);

  return { subcategories, products, loading, error };
};
