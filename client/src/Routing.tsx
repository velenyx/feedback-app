import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRouter } from "./utils/router/PrivateRouter";

export const Routing = () => {
  return (
    <Routes>
      <Route element={<PrivateRouter />}></Route>
      <Route path="/auth" element={<Authorization />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
