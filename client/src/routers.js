import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  HOME_ROUTE,
  DEVICE_ROUTE,
  CATEGORY_PRODUCTS_ROUTE,
} from "./utils/consts";

import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
];

export const publicRoutes = [
  {
    path: DEVICE_ROUTE + "/:id",
    element: <DevicePage />,
  },
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: CATEGORY_PRODUCTS_ROUTE + "/:id",
    element: <CategoryPage />,
  },
];
