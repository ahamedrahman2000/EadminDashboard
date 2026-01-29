import { createContext, useState } from "react";
import { products as initialProducts } from "../data/products";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productList, setProductList] = useState(initialProducts);

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
}
