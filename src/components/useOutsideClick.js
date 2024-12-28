import { useEffect } from 'react'

/**
 * Hook that handles clicks outside of the passed ref for both mouse and touch inputs
 */
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    /**
     * Call the callback if clicked on outside of element
     */
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    // Bind the event listeners for both mousedown and touchstart
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      // Unbind the event listeners on clean up
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [ref, callback]) // Ensure callback and ref don't change between re-renders, or re-bind the event listeners
}

export default useOutsideClick
