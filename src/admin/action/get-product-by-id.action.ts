import { lermnsApi } from "@/api/lermnsApi";
import type { Product } from "@/interfaces/product.interface";
import type { User } from "@/interfaces/user.interface";

export const getProductByIdAction = async (id: string): Promise<Product> => {
    if (!id) throw new Error("El ID del producto es requerido");

    if (id === "new") {
        return {
            id: "",
            title: "",
            price: 0,
            description: "",
            slug: "",
            stock: 0,
            sizes: [],
            gender: "men",
            tags: [],
            images: [],
            user: {
                id: "",
                email: "",
                fullName: "",
                isActive: true,
                roles: "",
            } as User,
        } as unknown as Product;
    }

    const { data } = await lermnsApi.get<Product>(`/products/${id}`);

    const images = data.images.map((image) => {
        if (image.includes("http")) return image;
        return `${import.meta.env.VITE_API_URL}/files/product/${image}`
    });

    return {
        ...data,
        images,
    };
};