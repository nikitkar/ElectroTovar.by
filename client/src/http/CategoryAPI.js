import { $authHost, $host } from "./Http";

export const createCategory = async (category) => {
  const { data } = await $authHost.post("/api/category", category);

  return data;
};

export const fetchCategory = async () => {
  const { data } = await $host.get("/api/category");

  return data;
};
