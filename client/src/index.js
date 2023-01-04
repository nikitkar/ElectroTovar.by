import { createContext } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import HeaderStore from "./store/HeaderStore";
import CategoriesByProductsStore from "./store/CategoriesByProducts";
import BasketStore from "./store/BasketStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      products: new ProductStore(),
      categories: new ProductStore(),
      brands: new ProductStore(),
      isActiveHeader: new HeaderStore(),
      categoriesByProducts: new CategoriesByProductsStore(),
      basket: new BasketStore(),
      authModal: true,
    }}>
    <App />
  </Context.Provider>
);
