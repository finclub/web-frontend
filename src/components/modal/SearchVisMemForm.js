import { useState, useRef } from 'react'
import styles from './searchVisMemForm.module.css'

const SearchVisMemForm = ({ onSearchResults }) => {
  const [query, setQuery] = useState('')
  // use ref to avoid rerendering caused by use state
  const inputRef = useRef(null)

  const handleSearch = () => {
    const inputValue = inputRef.current.value
    setQuery(inputValue)
    const results = inputValue ? ['Data 1', 'Data 2'] : []
    onSearchResults(results)
  }

  return (
    <div className={styles.searchModal}>
      <div className="search">
        <input type="search" placeholder="Search.." ref={inputRef} />
      </div>
      <button className="button" onClick={handleSearch}>
        Search
      </button>
      {/* {searchResults.length > 0 && (
        <div>
          {searchResults.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      )} */}
    </div>
  )
}

export default SearchVisMemForm
