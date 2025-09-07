export interface Category {
  id: string;
  name: string;
  isVisible: boolean;

  // Relación recursiva: opcional para evitar ciclos infinitos al serializar.
  parentCategory?: Category;

  // Arreglo de subcategorías.
  subcategories: Category[];

  // ID de la tienda a la que pertenece la categoría.
  store: string;

  createdAt: Date;
  updatedAt: Date;
  icon?: string;
}
