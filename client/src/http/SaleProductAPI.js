import { $authHost, $host } from "./Http";

export const createSaleProduct = async (idClient, idProduct, date, price, count) => {
  const { data } = await $host.post("/api/sale");

  return data;
};

export const fetchSaleProduct = async () => {
  const { data } = await $authHost.get("/api/sale");

  return data;
};
