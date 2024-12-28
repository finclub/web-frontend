import { useState, useMemo, useRef } from 'react'
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
import FilterFunction from './FilterFunction'
import useOutsideClick from './useOutsideClick'

const Table = () => {
  const finalData = useMemo(() => dataJSON, [])
  const finalColumnDef = useMemo(() => columnDefWithCheckBox, [])

  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnFilters, setColumnFilters] = useState([])

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      globalFilter: filtering,
      rowSelection: rowSelection,
      columnVisibility: columnVisibility,
      columnFilters: columnFilters
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    enableRowSelection: true,
    onColumnFiltersChange: setColumnFilters
  })

  // Toggle Column Hiding
  const [isToggleColVisible, setIsToggleColVisible] = useState(false)
  const toggleDropdownRef = useRef(null)

  useOutsideClick(toggleDropdownRef, () => {
    if (isToggleColVisible) {
      setIsToggleColVisible(false) // Close dropdown when clicking outside
    }
  })

  const toggleColVisibility = () => {
    setIsToggleColVisible(!isToggleColVisible)
  }

  return (
    <>
      <span className="holdings-selector-wrap">
        <div className="su-select holdings-selector" name="holdings-selector">
          <select>
            <option label="All stocks" value="all">
              All stocks
            </option>
            <option label="Kite only" value="kite">
              Kite only
            </option>
            <option label="Smallcase" value="smallcase">
              Smallcase
            </option>
            <option label="Mutual funds" value="mutualfunds">
              Mutual funds
            </option>
          </select>{' '}
          <i className="icon icon-chevron-down"></i>
        </div>
      </span>

      {/* Global Search Filter */}
      <input
        type="text"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />
      {/* Global Search End */}
      {/* Column Hiding Start*/}
      <div className="dropdown-container" ref={toggleDropdownRef}>
        {/* <button onClick={toggleVisibility} className="toggle-button">
          {isToggleColVisible ? 'Hide Options' : 'Show Options'}
        </button> */}
        <button
          onClick={toggleColVisibility}
          className={`toggle-button ${
            isToggleColVisible ? 'button-open' : 'button-closed'
          }`}
        >
          Toggle
        </button>
        {
          <div
            className={`dropdown-menu ${isToggleColVisible ? 'show' : 'hide'}`}
          >
            <label className="checkbox-option">
              <input
                type="checkbox"
                checked={tableInstance.getIsAllColumnsVisible()}
                onChange={tableInstance.getToggleAllColumnsVisibilityHandler()}
              />
              <span>Toggle All</span>
            </label>
            {tableInstance.getAllLeafColumns().map((column) => (
              <div key={column.id}>
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={column.getIsVisible()}
                    onChange={column.getToggleVisibilityHandler()}
                  />
                  <span>{column.id}</span>
                </label>
              </div>
            ))}
          </div>
        }
      </div>
      <hr />
      {/* Column Hiding End*/}
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {console.log('columnEl', columnEl)}
                      {columnEl.isPlaceholder ? null : (
                        <>
                          {flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                          {columnEl.column.getCanFilter() && (
                            <div>
                              <FilterFunction
                                column={columnEl.column}
                                table={tableInstance}
                              />
                            </div>
                          )}
                        </>
                      )}
                      {/* Switch Sorting Buttons */}
                      {columnEl.column.getCanSort() && (
                        <span
                          onClick={columnEl.column.getToggleSortingHandler()}
                          style={{ cursor: 'pointer', marginLeft: '5px' }}
                        >
                          {
                            {
                              asc: '🔝',
                              desc: '🔽',
                              none: '⇅'
                            }[columnEl.column.getIsSorted() || 'none']
                          }
                        </span>
                      )}
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
