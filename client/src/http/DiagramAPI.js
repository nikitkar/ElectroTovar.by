import { $authHost } from "./Http";

export const getPieChart = async () => {
  const { data } = await $authHost.get("/api/diagram/pieChart");

  return data;
};

export const getHistogram = async () => {
  const { data } = await $authHost.get("/api/diagram/histogram");

  return data;
};
