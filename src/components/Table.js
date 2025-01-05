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
import FilterFunction from './FilterFunction'
import useOutsideClick from './useOutsideClick'

const Table = ({ columnDef, dataJSON }) => {
  console.log('table')

  const finalData = useMemo(() => dataJSON, [])
  const finalColumnDef = useMemo(() => columnDef, [])

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

  const toggleColVisibility = () => setIsToggleColVisible(!isToggleColVisible)

  return (
    <>
      <section className="table-container">
        <div className="table-toolbar">
          <div className="left-buttons">
            {/* Global Search Filter */}
            <div className="search" style={{ width: '200px' }}>
              <i className="search-icon" />
              <input
                type="search"
                placeholder="Search.."
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
              />
            </div>
            {/* Global Search End */}
          </div>

          <div className="right-buttons">
            {/* Column Hiding Start*/}
            <div className="dropdown-container" ref={toggleDropdownRef}>
              <button
                onClick={toggleColVisibility}
                className={`toggle-button minimal-button ${
                  isToggleColVisible ? 'button-open' : 'button-closed'
                }`}
              >
                <i className="column-icon" />
                <span className="button-label"> Select columns</span>
              </button>
              {
                <div
                  className={`dropdown-menu ${
                    isToggleColVisible ? 'show' : 'hide'
                  }`}
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
            {/* Column Hiding End*/}
            <div>
              <button className="minimal-button download">
                <span className="excel-icon"></span>
                <span className="button-label">Download</span>
              </button>
            </div>
          </div>
        </div>

        <div className="table">
          <table>
            <thead>
              {tableInstance.getHeaderGroups().map((headerEl) => {
                return (
                  <tr key={headerEl.id}>
                    {headerEl.headers.map((columnEl) => {
                      return (
                        <th key={columnEl.id} colSpan={columnEl.colSpan}>
                          {columnEl.isPlaceholder ? null : (
                            <>
                              <div style={{ display: 'flex' }}>
                                {flexRender(
                                  columnEl.column.columnDef.header,
                                  columnEl.getContext()
                                )}
                                {/* Switch Sorting Buttons */}
                                {columnEl.column.getCanSort() && (
                                  <span
                                    onClick={columnEl.column.getToggleSortingHandler()}
                                    style={{
                                      cursor: 'pointer',
                                      marginLeft: '5px'
                                    }}
                                  >
                                    {
                                      {
                                        asc: <i className="arrow-up-icon" />,
                                        desc: <i className="arrow-down-icon" />,
                                        none: (
                                          <i className="arrow-up-down-icon" />
                                        )
                                      }[columnEl.column.getIsSorted() || 'none']
                                    }
                                  </span>
                                )}
                              </div>
                              {columnEl.column.getCanFilter() && (
                                <div className="table-cell-format">
                                  <FilterFunction
                                    column={columnEl.column}
                                    table={tableInstance}
                                  />
                                </div>
                              )}
                            </>
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
        </div>

        {/* Selected table */}
        <div>
          <ul>
            {tableInstance.getSelectedRowModel().flatRows.map((el) => {
              return <li key={el.id}>{JSON.stringify(el.original)}</li>
            })}
          </ul>
        </div>

        {/* Pagination  */}
        <nav className="table-pagination">
          <div>
            {(() => {
              const currentPage =
                tableInstance.options.state.pagination.pageIndex + 1
              const rowsPerPage =
                tableInstance.options.state.pagination.pageSize
              const totalRows = tableInstance.getRowModel().rows.length

              // Calculate start and end row numbers based on the current page
              const startRow = (currentPage - 1) * rowsPerPage + 1
              let endRow = currentPage * rowsPerPage
              if (endRow > totalRows) endRow = totalRows

              return `${startRow} - ${endRow}`
            })()}
          </div>

          <div>
            <select
              value={tableInstance.options.state.pagination.pageSize}
              onChange={(e) => tableInstance.setPageSize(e.target.value)}
              style={{ marginRight: '10px' }}
            >
              {[10, 25, 50].map((pageSizeEl) => (
                <option key={pageSizeEl} value={pageSizeEl}>
                  {pageSizeEl}
                </option>
              ))}
            </select>

            <div>
              <button
                onClick={() => tableInstance.previousPage()}
                disabled={!tableInstance.getCanPreviousPage()}
                className="previous"
              >
                {'\u00AB Previous'}
              </button>
            </div>

            {/* Display current page number */}
            <div
              style={{
                display: 'inline-block',
                margin: '0px 10px',
                whiteSpace: 'nowrap',
                alignSelf: 'center'
              }}
            >
              {tableInstance.options.state.pagination.pageIndex + 1} {'-'}
              {tableInstance.getPageCount()}
            </div>

            <div>
              <button
                onClick={() => tableInstance.nextPage()}
                disabled={!tableInstance.getCanNextPage()}
                className="next"
              >
                {'Next \u00BB'}
              </button>
            </div>
          </div>
        </nav>
        {/* <input
          type="number"
          defaultValue={tableInstance.options.state.pagination.pageIndex}
          onChange={(e) => tableInstance.setPageIndex(e.target.value)}
        /> */}
      </section>
    </>
  )
}

export default Table
