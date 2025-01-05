import { createColumnHelper } from '@tanstack/react-table'
import IndeterminateCheckbox from '../components/IndeterminateCheckbox'
import Actions from '../components/Actions'

const columnHelper = createColumnHelper()

export const visitors = [
  {
    id: 'select',
    //     cell: ({ getValue }) => {
    //   return <div >{getValue()}</div>
    // }
    header: ({ table }) => (
      <div>
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
      <div>
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
    header: () => <div>Id</div>,
    cell: ({ getValue, row }) => {
      return (
        <>
          <div className="image-cell-format">
            <img alt="avatar" src={row.original.profileImage} loading="lazy" />
            <span>{getValue()}</span>
          </div>
        </>
      )
    },
    enableColumnFilter: false,
    enableSorting: false
  }),
  {
    accessorKey: 'fullName',
    // accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    header: () => <div>Name</div>,
    cell: ({ getValue }) => {
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
    header: () => <div>Gender</div>,
    filterFn: 'equalsString',
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>
    }
    // header: ({ column }) => {
    //   return <div >{column.columnDef.header}</div>
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
    header: () => <div>Email</div>,
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>
    }
  },
  {
    accessorKey: 'date',
    header: () => <div>Date</div>,
    cell: ({ getValue }) => {
      return <div>{getValue()}</div>
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
    header: () => <div>Status</div>,
    cell: ({ getValue }) => {
      const isActive = getValue()
      return (
        <>
          <div className="status">
            <span className={`${isActive ? 'active' : 'in-active'}`}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </>
      )
    }
  },
  {
    accessorKey: 'actions',
    header: () => <div>Action</div>,
    cell: ({ getValue, row }) => {
      const id = getValue()
      return <Actions row={row} />
    },
    enableColumnFilter: false,
    enableSorting: false
  }
]
