import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: []
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then((resp) => {
        return resp.json()
      })
      .then((transactions) => {
        this.setState({transactions})
      })
  }

  handleChange = (event) => {
    const searchTerm = event.target.value
    this.setState({searchTerm})
  }

  render() {
    const {transactions, searchTerm} = this.state

    return (
      <div>
        <Search searchTerm={searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={transactions} searchTerm={searchTerm} />
      </div>
    )
  }
}

export default AccountContainer
