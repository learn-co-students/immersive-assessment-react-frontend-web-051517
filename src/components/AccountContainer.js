import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: [
      ]
    }
  }

  seeTransactionDescriptions(){
    this.state.transactions.map((transaction) =>
    console.log(transaction.description))
  }


  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
    this.searchFilter()
  }

  searchFilter = () => {
    const searchTransactions = this.state.transactions.filter((transaction) => {
      console.log(this.state.searchTerm)
      return transaction.description.includes(this.state.searchTerm)
    })
    console.log(searchTransactions)

    this.setState({
      transactions: searchTransactions
    })
  }

  componentWillMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then((res)=>res.json())
    .then((data)=>this.setState({transactions: data}))
  }

  componentDidMount(){
    console.log(this.state.transactions.length)
    this.seeTransactionDescriptions()
  }


  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions}  />
      </div>
    )
  }
}

export default AccountContainer
