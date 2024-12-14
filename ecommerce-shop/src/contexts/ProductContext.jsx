import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { useFilter } from "../hooks/useFilter";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { products, isLoading, categories } = useProduct();
  const { filteredProducts, selectedCategory, setSelectedCategory } =
    useFilter(products);

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        isLoading,
        categories,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
