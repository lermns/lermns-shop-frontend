import { lermnsApi } from "@/api/lermnsApi";
import type { Product } from "@/interfaces/product.interface";
import { sleep } from "@/lib/sleep";

export const createUpdateProductAction = async (
    productLike: Partial<Product> & { files?: File[] }
): Promise<Product> => {

    await sleep(1500); // Simular retardo de red

    const { id, user, images, files = [], ...rest } = productLike;

    const isCreating = id === "new";

    rest.stock = Number(rest.stock) || 0;
    rest.price = Number(rest.price) || 0;

    // Preparar el objeto a enviar, lo definimos any para que react no se queje
    const dataToSend: any = { ...rest };

    // Solo maneja imágenes si hay files nuevos o si estamos creando un producto
    if (files.length > 0 || isCreating) {
        const imagesToSave = [...(images || [])];

        // Si hay archivos nuevos
        if (files.length > 0) {
            const newImageNames = await uploadFiles(files);
            imagesToSave.push(...newImageNames);
        }

        // Para enviar solo los nombres sin el https://
        dataToSend.images = imagesToSave.map(image => {
            if (image.includes("http")) return image.split("/").pop() || "";
            return image;
        });
    }
    // Si no hay files nuevos y estamos editando, no enviar el campo images

    const { data } = await lermnsApi<Product>({
        url: isCreating ? '/products' : `/products/${id}`,
        method: isCreating ? "POST" : "PATCH",
        data: dataToSend
    });

    return {
        ...data,
        images: data.images.map((image) => {
            if (image.includes("http")) return image;
            return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
        })
    };
}

export interface FileUploadResponse {
    secureUrl: string;
    fileName: string;
}

const uploadFiles = async (files: File[]) => {
    const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        const { data } = await lermnsApi<FileUploadResponse>({
            url: "/files/product",
            method: "POST",
            data: formData,
        });

        return data.fileName;
    });

    const uploadedFileNames = await Promise.all(uploadPromises);

    return uploadedFileNames;
};