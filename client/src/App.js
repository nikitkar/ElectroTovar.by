import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";

import AppRouter from "./components/AppRouter";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

import "./assets/sass/app.scss";
import { Context } from "./index";
import { useEffect } from "react";
import { check } from "./http/UserAPI";

const App = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    check().then((data) => {
      user.setUser(true);
      user.setIsAuth(true);
      user.setRole(data.role);
    });
  }, [user]);

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
