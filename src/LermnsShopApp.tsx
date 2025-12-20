import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

// Definimos el router provider pasandole nuestro router definido con las rutas
export const LermnsShopApp = () => {
  return <RouterProvider router={appRouter} />;
};
