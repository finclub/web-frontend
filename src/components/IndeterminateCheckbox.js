import { useEffect, useRef } from 'react'

const IndeterminateCheckbox = ({ indeterminate, ...rest }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate])

  return <input type="checkbox" ref={ref} {...rest} />
}

export default IndeterminateCheckbox
