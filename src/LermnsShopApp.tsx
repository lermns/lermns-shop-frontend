import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
// Definimos el router provider pasandole nuestro router definido con las rutas
export const LermnsShopApp = () => {
  {/* definimos el queryClientProvider y le pasamos el newquery para poder hacer las peticiones con axios*/}
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <RouterProvider router={appRouter} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
