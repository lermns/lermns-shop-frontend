import { lermnsApi } from "@/api/lermnsApi";
import type { Product } from "@/interfaces/product.interface";
import { sleep } from "@/lib/sleep";

export const createUpdateProductAction = async (
    productLike: Partial<Product>
): Promise<Product> => {

    await sleep(1500); // Simular retardo de red

    const { id, user, images = [], ...rest } = productLike;

    const isCreating = id === "new";

    // el 1ro manda un string vacio y el 2do no manda nada
    console.log("1-> ", { id })
    console.log("2-> ", productLike.id)

    rest.stock = Number(rest.stock) || 0;
    rest.price = Number(rest.price) || 0;

    console.log({ isCreating });

    const { data } = await lermnsApi<Product>({
        url: isCreating ? '/products' : `/products/${id}`,
        method: isCreating ? "POST" : "PATCH",
        data: rest
    });

    // como da error este log nunca se ejecuta
    console.log("data create -> ", data.id);

    return {
        ...data,
        images: data.images.map((image) => {
            if (image.includes("http")) return image;
            return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
        })
    };
}