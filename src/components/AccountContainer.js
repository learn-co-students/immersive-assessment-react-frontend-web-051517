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

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions
      })
    })
  }

  handleSearch = event => {
    let searchTerm = event.target.value.toUpperCase()
    this.setState({
      searchTerm
    })
  }

  filterList(){
    let filtered = this.state.transactions.filter(transaction => {
      if (transaction.category.toUpperCase().includes(this.state.searchTerm)){
        return transaction
      }
      if (transaction.description.toUpperCase().includes(this.state.searchTerm)){
        return transaction
      }
    })
    return filtered
  }

  render() {
    const filteredTransactions = this.filterList()

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <TransactionsList transactions={filteredTransactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
