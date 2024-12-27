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
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler()
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler()
        }}
      />
    )
  },
  columnHelper.accessor('id', {
    header: 'Id'
  }),
  {
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    header: 'First Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'date',
    header: 'Date'
    // cell: ({ getValue }) => moment(new Date(getValue())).format("MMM Do YY"),
  }
]
