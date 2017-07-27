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
      transactions: [],
      searchResults: []
    }
  }

  fetchTransactions = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then( res => res.json() )
      .then( jsonRes => {
        this.setState({
          transactions: jsonRes,
          searchResults: jsonRes
        })
       })
  }

  componentDidMount = () => {
   this.fetchTransactions()
  }

  handleChange = (event) => {
    const searchTerm = event.target.value
    this.setState({
      searchTerm,
      searchResults: this.state.transactions.filter( t => {return t.description.toLowerCase().includes(searchTerm.toLowerCase()) || t.category.toLowerCase().includes(searchTerm.toLowerCase())})
    })
  }


  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.searchResults} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
