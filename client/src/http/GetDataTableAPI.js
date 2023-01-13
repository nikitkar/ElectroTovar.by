import { $authHost } from "./Http";

export const getDataTable = async (name) => {
  const { data } = await $authHost.post("/api/getDataTable", name);

  return data;
};

export const getDataUser_discount = async () => {
  const { data } = await $authHost.get("/api/getDataTable/users");

  return data;
};
