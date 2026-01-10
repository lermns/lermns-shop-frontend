import { Navigate, useNavigate, useParams } from "react-router";

import { useProduct } from "@/admin/hook/useProduct";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { ProductForm } from "./ui/ProductForm";
import type { Product } from "@/interfaces/product.interface";
import { toast } from "sonner";

export const AdminProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data: product, mutation } = useProduct(id || "");

  const title = id === "new" ? "Nuevo producto" : "Editar producto";
  const subTitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";

  const handleSubmit = async (
    productLike: Partial<Product> & { files?: File[] }
  ) => {
    console.log(productLike);
    const productData = { ...productLike, id };
    await mutation.mutateAsync(productData, {
      onSuccess: (product: Product) => {
        toast.success("Producto actualizado correctamente", {
          position: "top-right",
        });
        navigate(`/admin/product/${product.id}`);
      },
      onError: (error) => {
        console.log("error mutation -> ", { error }, productData.id);
        toast.error("Error al actualizar le producto", {
          position: "top-right",
        });
      },
    });
  };

  if (isError) {
    return <Navigate to="/admin/products" />;
  }

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <ProductForm
      title={title}
      subTitle={subTitle}
      product={product}
      productId={id!}
      onSubmit={handleSubmit}
      isPending={mutation.isPending}
    />
  );
};
