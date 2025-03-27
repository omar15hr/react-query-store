import { productsApi } from "../api/productsApi";
import { type Product } from "../interfaces/product";

interface getProductsOptions {
  filterKey?: string;
}

export const sleep = (seconds: number = 1): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const getProducts = async ({ filterKey }: getProductsOptions):Promise<Product[]> => {
  await sleep(1);
  const filterUrl = filterKey ? `category=${filterKey}` : "";

  const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);
  return data;
};

export const getProductById = async ( id: number ):Promise<Product> => {
  // await sleep(1);

  const { data } = await productsApi.get<Product>(`/products/${id}`);
  return data;
};