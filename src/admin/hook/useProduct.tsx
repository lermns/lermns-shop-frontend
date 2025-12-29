import { useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../action/get-product-by-id.action";

export const useProduct = (id: string) => {
    
    return useQuery({
        queryKey: [
            "id",
            { id },
        ],
        queryFn: () =>
            getProductByIdAction(
                id!,
            ),
        staleTime: 1000 * 60 * 5,
    });
};
