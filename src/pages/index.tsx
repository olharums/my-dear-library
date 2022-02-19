import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";

import appRoutes from "./routes";
import Dashboard from "./Dashboard";

const AppRouter: FC = observer(() => {
  return (
    <Routes>
      {appRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
});

export default AppRouter;
