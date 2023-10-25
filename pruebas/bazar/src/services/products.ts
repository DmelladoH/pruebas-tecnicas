import data from "../data/mockData.json";
import { Product } from "../types";

export function getProductsBySearch(query: string): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        data.products.filter((product: Product) =>
          product.title.toLowerCase().includes(query.toLocaleLowerCase())
        )
      );
    }, 100);
  });
}

export function getProductById(itemId: number): Promise<Product | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = data.products.find(({ id }) => id === itemId);
      resolve(item);
    }, 100);
  });
}
