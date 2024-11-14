import { Route, Routes } from "react-router-dom";
import { list } from "../utils/constant";

const AppRoutes = () => {
  return (
    <Routes>
      {list.map((data, i) => (
        <Route key={i} path={data.path} element={<data.element />} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
