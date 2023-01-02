import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { authRoutes, publicRoutes } from "../routers";
import NotFound from "../pages/NotFound";

import { Context } from "../index";

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      <Routes>
        {user.role === "ADMIN" &&
          authRoutes.map(({ path, element }) => (
            <Route exact path={path} element={element} key={path} />
          ))}
        {publicRoutes.map(({ path, element }) => (
          <Route exact path={path} element={element} key={path} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
});

export default AppRouter;
