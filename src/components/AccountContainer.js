import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      transactions: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const url = 'https://boiling-brook-94902.herokuapp.com/transactions'
    fetch(url)
      .then(res => res.json())
      .then(transactions => {
        this.setState({ transactions })
        if (this.state.searchTerm !== '') {
          this.handleSearch()
        }
    })
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
    this.fetchData()
  }

  handleSearch() {
    const filtered = this.state.transactions.filter(trans => {
      let description = trans.description.toLowerCase()
      let category = trans.category.toLowerCase()
      let terms = this.state.searchTerm.toLowerCase()

      return description.includes(terms) || category.includes(terms)
    })
    this.setState({ transactions: filtered })
  }

  render() {

    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
        <TransactionsList
          transactions={this.state.transactions}
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }
}

export default AccountContainer
