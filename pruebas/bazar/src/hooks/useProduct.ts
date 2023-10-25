import { useEffect, useState } from "react";
import { Product } from "../types";
import { getProductById } from "../services/products";

interface Props {
  id: number | undefined;
}

function useProduct({ id }: Props) {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { product, isLoading };
}

export default useProduct;
