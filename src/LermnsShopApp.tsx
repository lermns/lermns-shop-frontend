import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import type { PropsWithChildren } from "react";
import { CustomFullScreenLoading } from "./components/custom/CustomFullScreenLoading";
import { useAuthStore } from "./auth/store/auth.store";

const queryClient = new QueryClient();

/**
 * Componente que actúa como guardián de autenticación para las rutas protegidas.
 * 
 * @component
 * @param {PropsWithChildren} props - Props del componente
 * @param {React.ReactNode} props.children - Contenido a renderizar una vez autenticado
 * 
 * @returns {React.ReactNode} Los children si la autenticación es exitosa, o un mensaje de carga mientras 
 * se verifica
 * 
 * @example
 * <CheckAuthAction>
 *   <Dashboard />
 * </CheckAuthAction>
 * 
 * @description
 * Este componente:
 * 1. Ejecuta la función `checkAuthAction` al montar para verificar el estado de autenticación
 * 2. Muestra un mensaje "Loading" mientras se valida la autenticación
 * 3. Una vez completada la verificación, renderiza los componentes hijos
 * 4. No reintenta la autenticación en caso de fallar (retry: false)
 * 5. Utiliza React Query para gestionar la caché y el estado de la consulta
 */
const CheckAuthAction = ({ children }: PropsWithChildren) => {
  const { checkAuthStatus } = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: checkAuthStatus,
    retry: false,
    refetchInterval: 1000 * 60 * 60,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <CustomFullScreenLoading />

  return children;
}

// Definimos el router provider pasandole nuestro router definido con las rutas
export const LermnsShopApp = () => {
  {/* definimos el queryClientProvider y le pasamos el newquery para poder hacer las peticiones con axios*/ }
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {/* Usamos checkAuthAction para usar el  */}
      <CheckAuthAction>
        <RouterProvider router={appRouter} />;
      </CheckAuthAction>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
