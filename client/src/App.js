import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";

import AppRouter from "./components/AppRouter";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import { check } from "./http/UserAPI";
import { fetchPromotionsUsers } from "./http/PromotionsUsersAPI";
import { Context } from "./index";

import "./assets/sass/app.scss";
const App = observer(() => {
  const { user, listPromotionsUsers, basket } = useContext(Context);

  useEffect(() => {
    check().then((data) => {
      user.setUser(true);
      user.setIsAuth(true);
      user.setRole(data.role);
      user.setId(data.id);

      fetchPromotionsUsers().then((dataPro) => {
        listPromotionsUsers.setListPromotionsUsers(dataPro[data.id - 1]);
        listPromotionsUsers.setPercentPromotionsUsers(
          dataPro[data.id - 1].percentPromotionsUsers
        );
      });
    });

    basket.setListBasket(basket.localStorageListBasket);
  }, [basket, listPromotionsUsers, user]);

  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <AppRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
});

export default App;
