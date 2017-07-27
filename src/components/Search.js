import React from 'react'

const Search = props => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        onChange={props.handleChange}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
