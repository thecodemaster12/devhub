import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";
import { AuthRoutes } from "./AuthRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        element: <AuthLayout />,
        children: [...AuthRoutes]
    }
])