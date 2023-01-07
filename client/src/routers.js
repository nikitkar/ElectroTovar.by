import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  HOME_ROUTE,
  DEVICE_ROUTE,
  CATEGORY_PRODUCTS_ROUTE,
  CART_ROUTER,
  CHECKOUT_ROUTER,
} from "./utils/consts";

import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";

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
    path: CART_ROUTER,
    element: <Basket />,
  },
  {
    path: CHECKOUT_ROUTER,
    element: <Checkout />,
  },
  {
    path: CATEGORY_PRODUCTS_ROUTE + "/:id",
    element: <CategoryPage />,
  },
];
