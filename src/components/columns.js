import { createColumnHelper } from '@tanstack/react-table'
import IndeterminateCheckbox from './IndeterminateCheckbox'

const columnHelper = createColumnHelper()

export const columnDefWithCheckBox = [
  {
    id: 'select',
    //     cell: ({ getValue }) => {
    //   return <div className="table-cell-format">{getValue()}</div>
    // }
    header: ({ table }) => (
      <div className="table-cell-format">
        <IndeterminateCheckbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler()
          }}
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="table-cell-format">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler()
          }}
        />
      </div>
    )
  },
  columnHelper.accessor('id', {
    header: () => <div className="table-cell-format">Id</div>,
    cell: ({ getValue, row }) => {
      return (
        <>
          <div className="image-cell-format">
            <img alt="avatar" src={row.original.avatar} loading="lazy" />
            <span>{getValue()}</span>
          </div>
        </>
      )
    },
    enableColumnFilter: false,
    enableSorting: false
  }),
  {
    accessorKey: 'first_name',
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    header: () => <div className="table-cell-format">Name</div>,
    cell: ({ getValue, row }) => {
      return (
        <>
          <div className="image-col-container">
            <span>{getValue()}</span>
          </div>
        </>
      )
    }
  },
  {
    accessorKey: 'gender',
    header: () => <div className="table-cell-format">Gender</div>,
    filterFn: 'equalsString',
    cell: ({ getValue }) => {
      return <div className="table-cell-format">{getValue()}</div>
    }
    // header: ({ column }) => {
    //   return <div className="table-cell-format">{column.columnDef.header}</div>
    // }
    //  column }) => <em>{column.columnDef.header

    // Filter: ({ column }) => {
    //   return (
    //     <input
    //       type="text"
    //       value={column.getFilterValue() || ''}
    //       onChange={(e) => column.setFilterValue(e.target.value)}
    //       placeholder="Filter by Gender"
    //     />
    //   )
    // }
  },
  {
    accessorKey: 'email',
    header: () => <div className="table-cell-format">Email</div>,
    cell: ({ getValue }) => {
      return <div className="table-cell-format">{getValue()}</div>
    }
  },
  {
    accessorKey: 'date',
    header: () => <div className="table-cell-format">Date</div>,
    cell: ({ getValue }) => {
      return <div className="table-cell-format">{getValue()}</div>
    }
    // cell: ({ getValue }) => moment(new Date(getValue())).format('MMM Do YY')
  },
  // {
  //   accessorFn: (row) => new Date(row.date), // convert to Date for sorting and filtering
  //   accessorKey: 'date',
  //   header: 'Date',
  //   filterVariant: 'date',
  //   filterFn: 'lessThan',
  //   sortingFn: 'datetime',
  //   Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), // render Date as a string
  //   Header: ({ column }) => <em>{column.columnDef.header}</em> // custom header markup
  // },
  {
    accessorKey: 'status',
    header: () => <div className="table-cell-format">Status</div>,
    cell: ({ getValue }) => {
      const isActive = getValue()
      return (
        <>
          <div className=" table-cell-format status">
            <span className={`${isActive ? 'active' : 'in-active'}`}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </>
      )
    }
  }
]
