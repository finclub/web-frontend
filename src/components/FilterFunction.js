import React from 'react'
import DebouncedInput from './DebounceInput'

function FilterFunction({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  )

  if (column.id === 'gender') {
    return (
      <select
        value={columnFilterValue || ''}
        onChange={(e) => {
          column.setFilterValue(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    )
  }

  if (column.id === 'status') {
    return (
      <select
        value={
          columnFilterValue === undefined ? '' : columnFilterValue.toString()
        }
        onChange={(e) => {
          column.setFilterValue(
            e.target.value === '' ? undefined : e.target.value === 'true'
          )
        }}
      >
        <option value="">All</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
    )
  }

  return typeof firstValue === 'number' ? (
    <div>
      <div>
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={columnFilterValue?.[0] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old) => [value, old?.[1]])
          }
          placeholder="min"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={columnFilterValue?.[1] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old) => [old?.[0], value])
          }
          placeholder="max"
        />
      </div>
    </div>
  ) : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={columnFilterValue ?? ''}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={'Search... '}
        list={column.id + 'list'}
        maxLength={100}
      />
    </>
  )
}

export default FilterFunction
