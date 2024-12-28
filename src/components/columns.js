import { createColumnHelper } from '@tanstack/react-table'
import IndeterminateCheckbox from './IndeterminateCheckbox'

// export const columnDef = [
//   {
//     accessorKey: 'firstName',
//     cell: (info) => info.getValue(),
//     id: 'firstName',
//     size: 150
//   },
//   {
//     accessorFn: (row) => row.lastName,
//     cell: (info) => info.getValue(),
//     header: () => <span>Last Name</span>,
//     id: 'lastName',
//     size: 150
//   },
//   {
//     accessorKey: 'age',
//     header: () => 'Age',
//     id: 'age',
//     size: 120
//   },
//   {
//     accessorKey: 'visits',
//     header: () => <span>Visits</span>,
//     id: 'visits',
//     size: 120
//   },
//   {
//     accessorKey: 'status',
//     header: 'Status',
//     id: 'status',
//     size: 150
//   },
//   {
//     accessorKey: 'progress',
//     header: 'Profile Progress',
//     id: 'progress',
//     size: 180
//   }
// ]
// export const columnDef = [
//   {
//     accessorKey: 'id',
//     header: 'ID'
//   },
//   {
//     accessorFn: (row) => `${row.first_name} ${row.last_name}`,
//     header: 'Name'
//   },
//   {
//     accessorKey: 'email',
//     header: 'Email'
//   },
//   {
//     accessorKey: 'date',
//     header: 'Date'
//   }
// ]
const columnHelper = createColumnHelper()

export const columnDefWithCheckBox = [
  {
    id: 'select',
    //     cell: ({ getValue }) => {
    //   return <div className="centered-cell">{getValue()}</div>
    // }
    header: ({ table }) => (
      <div className="centered-cell">
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
      <div className="centered-cell">
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
    header: 'Id',
    enableColumnFilter: false,
    enableSorting: false
  }),
  {
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    header: 'First Name',
    cell: ({ getValue, row }) => {
      return (
        <>
          <div className="centered-cell">
            <img
              alt="avatar"
              height={30}
              src={row.original.avatar}
              loading="lazy"
              style={{ borderRadius: '50%' }}
            />
            <span>{getValue()}</span>
          </div>
        </>
      )
    }
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
    filterFn: 'equalsString',
    cell: ({ getValue }) => {
      return <div className="centered-cell">{getValue()}</div>
    }
    // header: ({ column }) => {
    //   return <div className="centered-cell">{column.columnDef.header}</div>
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
    header: 'Email',
    cell: ({ getValue }) => {
      return <div className="centered-cell">{getValue()}</div>
    }
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ getValue }) => {
      return <div className="centered-cell">{getValue()}</div>
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
    header: 'Status',
    cell: ({ getValue }) => {
      const isActive = getValue()
      return (
        <>
          <div className=" centered-cell status">
            <span className={`${isActive ? 'active' : 'in-active'}`}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </>
      )
    }
  }
]
