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

  componentDidMount = () => {
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then( res => res.json())
    .then( transData => this.setState({
      transactions: transData
    }))
  }

  //I was trying to figure out how to reset the transactions
  // array once the search bar was cleared but was not able to.
  // the problem I was having was something to do with some trailing
  // whitespace. I coerced the value to a boolean, but it was renering true
  // when empty, then false with the first letter entered, then true for the
  // remaining letters. If I would of been able to get that working, then I
  // I would of placed an if statement in the function below, and called
  // fetch transactions if the searchTerm was empty, else called filterTransactions.
  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
    this.filterTransactions()
  }

  filterTransactions = () => {
    let search = this.state.searchTerm
    let filtered = this.state.transactions.filter((trans) => {
      return (
      trans.description.toLowerCase().startsWith(search.toLowerCase())
      ||
      trans.category.toLowerCase().startsWith(search.toLowerCase())
      )
    })
    this.setState({
      transactions: filtered
    })
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={() => this.handleChange} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
