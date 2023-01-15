import { $authHost } from "./Http";

export const getDataTable = async (name) => {
  const { data } = await $authHost.get("/api/getDataTable", name);

  return data;
};

export const deletedRow = async (id, nameTable, nameColumn) => {
  const { data } = await $authHost.get("/api/getDataTable/delete", {
    param: {
      id,
      nameTable,
      nameColumn,
    },
  });

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
