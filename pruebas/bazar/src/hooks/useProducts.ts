import { useEffect, useState } from "react";
import { Product } from "../types";
import { getProductsBySearch } from "../services/products";

interface Props {
  search: string | undefined;
}

function useProducts({ search }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!search) return;

    setIsLoading(true);
    getProductsBySearch(search)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [search]);

  return { products, isLoading };
}

export default useProducts;
