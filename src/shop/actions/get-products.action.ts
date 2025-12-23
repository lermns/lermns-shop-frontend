import { lermnsApi } from "@/api/lermnsApi"
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
    limit?: number | string,
    offset?: number | string,
    sizes?: string,
    gender?: string,
    minPrice?: number,
    maxPrice?: number,
    q?: string,
}

export const getProductsAction = async (options: Options): Promise<ProductsResponse> => {
    const { limit, offset, sizes, gender, minPrice, maxPrice, q } = options;

    // enviamos el limite de grids en la pantalla y el offset la cantidad de grids que debe de saltarse
    const { data } = await lermnsApi.get<ProductsResponse>("/products", {
        params: {
            limit,
            offset,
            sizes,
            gender,
            minPrice,
            maxPrice,
            q
        },
    });

    // agregamos el path inicial a las imágenes para poder mostrarlas en la petición.
    const productsWithImageUrls = data.products.map(product => ({
        ...product,
        images: product.images.map(
            image => `${import.meta.env.VITE_API_URL}/files/product/${image}`
        )
    }));

    return {
        ...data,
        products: productsWithImageUrls
    };
}