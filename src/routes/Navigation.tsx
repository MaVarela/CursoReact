import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import {
  RegisterPage, FormikBasicPage, FormikYupPage,
  FormikComponents, FormikAbstractions
} from '../03 -forms/pages';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractions" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstractions Page</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstractions" element={<FormikAbstractions />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};