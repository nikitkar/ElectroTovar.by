import { $authHost, $host } from "./Http";
import jwtDecode from "jwt-decode";

export const registration = async (
  login,
  password,
  name,
  email,
  telephone,
  address
) => {
  try {
    const { data } = await $host.post("/api/user/registration", {
      login,
      password,
      name,
      email,
      telephone,
      address,
    });

    if (data.err) {
      return alert(data.err);
    }

    if (data.token) localStorage.setItem("token", data.token);
    else localStorage.setItem("token", data);

    return jwtDecode(data.token ? data.token : data);
  } catch (e) {
    alert("registration api error - " + e);
  }
};

export const login = async (login, password) => {
  const { data } = await $host.post("/api/user/login", {
    login,
    password,
  });

  if (data.err) {
    return alert(data.err);
  }

  localStorage.setItem("token", data.token);

  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("/api/user/auth");

  localStorage.setItem("token", data.token);

  return jwtDecode(data.token);
};

export const getAll = async () => {
  const { data } = await $authHost.get("/api/user/all");

  return data;
};
