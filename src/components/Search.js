import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  onType = e => {
    const { value } = e.target
    this.props.handleChange(value)
  }

  render() {
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          name="value"
          placeholder={"Search your Recent Transactions"}
          onChange={this.onType}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
