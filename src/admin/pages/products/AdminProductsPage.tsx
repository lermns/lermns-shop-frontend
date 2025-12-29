import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { useProducts } from "@/shop/hooks/useProducts";
import { PencilIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) return <CustomFullScreenLoading />;

  return (
    <>
      <div className="flex justify-between items-center">
        <AdminTitle title="Productos" subtitle="Administración de productos" />

        <div className="flex justify-end mb-10 gap-4">
          <Link to={"/admin/product/new"}>
            <Button>
              <PlusIcon />
              Nuevo Producto
            </Button>
          </Link>
        </div>
      </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/* Mapeo de la lista de productos recibidos por el custom useProducts */}
          {
            data!.products.map((value) => (
              <TableRow key={value.id}>
                <TableCell>
                  <img
                    src={value.images[0]}
                    alt={value.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </TableCell>
                <TableCell>
                  <Link to={`/admin/product/${value.id}`} className="underline hover:text-blue-500">
                    {value.title}
                  </Link>
                </TableCell>
                <TableCell>€{value.price}</TableCell>
                <TableCell>{value.tags}</TableCell>
                <TableCell>{value.stock} stock</TableCell>
                <TableCell>{value.sizes.join(", ")}</TableCell>
                <TableCell className="text-right">
                  <Link to={`/admin/product/${value.id}`}>
                    <PencilIcon className="w-5 h-5 text-blue-500 hover:text-blue-700 ml-5" />
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <CustomPagination totalPages={data!.pages} />
    </>
  );
};
