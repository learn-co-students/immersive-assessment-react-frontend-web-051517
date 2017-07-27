import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: [],
      matchingTransactions: []
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(res => this.setState({
        transactions: res,
        matchingTransactions: res
      }))
  }

  matchDescriptions = () => {
    let tempArr = []
    let regex = new RegExp(this.state.searchTerm, "gi")
    this.state.transactions.forEach(obj => {
      if (obj.description.match(regex)) tempArr.push(obj)
    })
    this.setState({ matchingTransactions: tempArr })
  }

  handleChange = val => {
    this.setState({
      searchTerm: val
    })
    this.matchDescriptions()
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList
          matchingTransactions={this.state.matchingTransactions}
        />
      </div>
    )
  }
}

export default AccountContainer
