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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[50%] m-10 flex-1">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-3" scope="col">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
                <th className="px-6 py-3">ACTIONS</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className=" border-b bg-gray-800 border-gray-700"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                  <button className="bg-transparent mx-1">✏️</button>
                  <button className="bg-transparent mx-1">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 px-4 pb-4 bg-gray-700"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-white">
              {1 + table.getState().pagination.pageIndex * 10}-
              {(table.getState().pagination.pageIndex + 1) * 10}
            </span>{" "}
            of <span className="font-semibold text-white">{data.length}</span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <button
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight border rounded-s-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-400 hover:text-white"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                Primera
              </button>
            </li>
            <li>
              <button
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight border  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-400 hover:text-white"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Anterior
              </button>
            </li>

            <li>
              <button
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-400 hover:text-white"
                onClick={() => {
                  if (
                    table.getState().pagination.pageIndex + 1 !=
                    table.getPageCount()
                  ) {
                    table.nextPage();
                  }
                }}
                disabled={!table.getCanNextPage()}
              >
                Siguiente
              </button>
            </li>
            <li>
              <button
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-400 hover:text-white"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                Ultima
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default SimpleTable;
