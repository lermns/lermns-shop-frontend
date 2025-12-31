import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../action/get-product-by-id.action";
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from "../action/create-update-product.action";

export const useProduct = (id: string) => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ["product", { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
    });
    console.log({ id });
    //TODO: mutation for update product
    const mutation = useMutation(
        {
            mutationFn: createUpdateProductAction,
            onSuccess: (product: Product) => {
                console.log("Todo salio bien (useMutation):", product);
                // Invalidar cache
                queryClient.invalidateQueries({ queryKey: ["products"] });
                // Actualizar queryData
                queryClient.setQueryData(["product", { id: product.id }], product);
            },
            onError: (error) => {
                console.log("Algo salio mal (useMutation):", error);
            },
        }
    );
    console.log({ id });
    //TODO: para borrar, metodo de prueba
    // const handleSubmitForm = async (productLike: Partial<Product>) => {
    //     console.log("hook useProduct -> ", { productLike });
    // }

    return {
        ...query,
        mutation,
    }
};
