import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

const URL = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

    state = {
      searchTerm: "",
      transactions: []
    }

  componentDidMount(){
    fetch(URL)
      .then(res => res.json())
      .then(transactions => this.setState({ transactions }))
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
