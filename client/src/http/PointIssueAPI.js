import { $authHost, $host } from "./Http";

export const createPointIssue = async (pointIssue) => {
  const { data } = await $authHost.post("/api/pointIssue", pointIssue);

  return data;
};

export const fetchPointIssue = async () => {
  const { data } = await $host.get("/api/pointIssue");

  return data;
};
