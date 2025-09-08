import React from "react";
import { FlatList, FlatListProps } from "react-native";

// Define las props que el componente aceptará, combinando las de FlatList
// y las específicas de la recarga.
type RefreshableListProps<T> = FlatListProps<T> & {
  refreshing: boolean;
  onRefresh: () => void;
};

// Componente genérico para cualquier lista con función de refresco.
const RefreshableList = <T,>({
  refreshing,
  onRefresh,
  ...props
}: RefreshableListProps<T>) => {
  return <FlatList {...props} onRefresh={onRefresh} refreshing={refreshing} />;
};

export default RefreshableList;
