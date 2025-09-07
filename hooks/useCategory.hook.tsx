import { Category } from "@/domain/Category";
import { getCategories } from "@/services/productService";
import { useEffect, useState } from "react";

// import { Text, View } from "react-native";

const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const result = await getCategories();
        setCategory(result);
      } catch (error) {
        setError("Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);

  return { category, loading, error };
};

export default useCategory;
