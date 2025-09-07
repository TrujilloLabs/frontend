import { Category } from "@/domain/Category";
import { useState } from "react";

// import { Text, View } from "react-native";

const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  return;
};

export default useCategory;
