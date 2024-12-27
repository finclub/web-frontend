import React from 'react'
import './table.css'
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel
} from '@tanstack/react-table'
import { columnDefWithCheckBox } from './columns'
import dataJSON from './data.json'

const Table = () => {
  const finalData = React.useMemo(() => dataJSON, [])
  const finalColumnDef = React.useMemo(() => columnDefWithCheckBox, [])

  const [sorting, setSorting] = React.useState([])
  const [filtering, setFiltering] = React.useState('')
  const [rowSelection, setRowSelection] = React.useState({})

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      globalFilter: filtering,
      rowSelection: rowSelection
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    enableRowSelection: true
  })

  return (
    <>
      {/* Global Search Filter */}
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />

      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th
                      key={columnEl.id}
                      colSpan={columnEl.colSpan}
                      onClick={columnEl.column.getToggleSortingHandler()}
                    >
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                          columnEl.column.columnDef.header,
                          columnEl.getContext()
                        )}
                      {/* CODE FOR UP AND DOWN SORTING */}
                      {
                        { asc: ' -UP🔝', desc: ' -DOWN🔽' }[
                          columnEl.column.getIsSorted() ?? null
                        ]
                      }
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* Selected table */}
      <hr />
      <div>
        <ul>
          {tableInstance.getSelectedRowModel().flatRows.map((el) => {
            return <li key={el.id}>{JSON.stringify(el.original)}</li>
          })}
        </ul>
      </div>
      {/* Pagination  */}
      <hr />
      <div>
        <button
          onClick={() => tableInstance.setPageIndex(0)}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          Previous Page
        </button>
        <button
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          Next Page
        </button>
        <button
          onClick={() =>
            tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
          }
          disabled={!tableInstance.getCanNextPage()}
        >
          {'>>'}
        </button>
      </div>
      <hr />
      <ul>
        <li>
          You are on page number:{' '}
          {tableInstance.options.state.pagination.pageIndex}
        </li>
        <li>Total pages: {tableInstance.getPageCount() - 1}</li>
      </ul>
      <hr />
      <input
        type="number"
        defaultValue={tableInstance.options.state.pagination.pageIndex}
        onChange={(e) => tableInstance.setPageIndex(e.target.value)}
      />
      <hr />
      <h4>
        Current page size: {tableInstance.options.state.pagination.pageSize}
      </h4>
      <select
        value={tableInstance.options.state.pagination.pageSize}
        onChange={(e) => tableInstance.setPageSize(e.target.value)}
      >
        {[10, 25, 50].map((pageSizeEl) => {
          return (
            <option key={pageSizeEl} value={pageSizeEl}>
              {pageSizeEl}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Table
