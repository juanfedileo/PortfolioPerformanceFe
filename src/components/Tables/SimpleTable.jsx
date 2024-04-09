import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import data from "../../Utils/MOCK_DATA.json";

const SimpleTable = () => {
  const columns = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "Fecha",
      accessorKey: "date",
    },
    {
      header: "Cantidad",
      accessorKey: "amount",
    },
    {
      header: "Moneda",
      accessorKey: "currency",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <table className="border border-white m-10">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="text-white opacity-90">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-white p-4">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-white text-white opacity-90 p-2 text-center"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
      <div className="flex flex-row m-10">
        <button onClick={() => table.setPageIndex(0)} className="h-10 w-30 m-1">
          Primera
        </button>
        <button onClick={() => table.previousPage()} className="h-10 w-30 m-1">
          Pagina Anterior
        </button>
        <button onClick={() => table.nextPage()} className="h-10 w-30 m-1">
          Pagina Siguiente
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="h-10 w-30 m-1"
        >
          Ultima
        </button>
      </div>
    </>
  );
};
export default SimpleTable;
