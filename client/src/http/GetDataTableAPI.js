import { $authHost } from "./Http";

export const getDataTable = async (name) => {
  const { data } = await $authHost.post("/api/getDataTable", name);

  return data;
};

export const getDataUser_discount = async (nameColumn, sortParam) => {
  const { data } = await $authHost.get("/api/getDataTable/users", {
    params: {
      nameColumn,
      sortParam,
    },
  });

  return data;
};
