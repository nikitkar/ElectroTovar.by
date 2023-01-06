import { $authHost, $host } from "./Http";

export const createPromotionsUsers = async (
  idClient,
  percentPromotionsUsers
) => {
  const { data } = await $authHost.post("/api/promotionsUsers", {
    idClient,
    percentPromotionsUsers,
  });

  return data;
};

export const fetchPromotionsUsers = async () => {
  const { data } = await $host.get("/api/promotionsUsers");

  return data;
};
