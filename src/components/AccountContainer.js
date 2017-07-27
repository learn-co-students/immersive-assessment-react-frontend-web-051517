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

  handleChange = (event) => {
    if (event.target.value === "") {
      this.fetchData()
    }
    
    this.setState({
      searchTerm: event.target.value
    })
    this.filter(this.state.searchTerm)
  }

  filter(searchTerm) {
    let filteredTransactions = this.state.transactions.filter( transaction => {
      return transaction.description.includes(searchTerm) || transaction.category.includes(searchTerm)
    })
    this.setState({
      transactions: filteredTransactions
    })
  }

  fetchData () {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(json => {
      this.setState({
        transactions: json
      })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
