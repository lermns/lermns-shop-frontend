import { createHashRouter, Navigate } from "react-router";
import { ShopLayouts } from "./shop/layouts/ShopLayouts";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashBoardPage } from "./admin/pages/dashboard/DashBoardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
// import { AdminLayout } from "./admin/layouts/AdminLayout";
// import { AuthLayout } from "./auth/layouts/AuthLayout";
import { lazy } from "react";
import { AdminRoute, NotAuthenticatedRoute } from "./components/routes/ProtectedRoutes";

// Hacemos la carga perezosa de estos 2 componentes porque no necesitamos que se rendericen apenas inicie la app
const AuthLayout = lazy(() => import("./auth/layouts/AuthLayout"));
const AdminLayout = lazy(() => import("./admin/layouts/AdminLayout"));

// definición de las rutas de nuestra app.
export const appRouter = createHashRouter([
  // Main Routes
  {
    path: "/",
    element: <ShopLayouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:idSlug",
        element: <ProductPage />,
      },
      {
        path: "gender/:gender",
        element: <GenderPage />,
      },
    ],
  },

  // Auth Routes
  {
    path: "/auth",
    element: (
      <NotAuthenticatedRoute>
        <AuthLayout />
      </NotAuthenticatedRoute>),
    children: [
      {
        index: true,
        element: <Navigate to={"/auth/login"} />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>),
    children: [
      {
        index: true,
        element: <DashBoardPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
      {
        path: "product/:id",
        element: <AdminProductPage />,
      },
    ],
  },

  // Default Route
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
