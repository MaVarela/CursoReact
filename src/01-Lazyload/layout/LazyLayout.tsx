import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to="lazy1" className={({ isActive }) => isActive ? 'nav-active' : undefined}>Lazy Page 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2" className={({ isActive }) => isActive ? 'nav-active' : undefined}>Lazy Page 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3" className={({ isActive }) => isActive ? 'nav-active' : undefined}>Lazy Page 3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} />
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
