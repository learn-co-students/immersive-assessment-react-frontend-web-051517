import React from 'react'
import Transaction from './Transaction'

export default class TransactionsList extends React.Component {

  sortBySearchTerm = () => {
    const search = this.props.searchTerm
    const regexp = new RegExp(search)
    return this.props.transactions.filter(transaction => {
      return transaction.category.toLowerCase() === this.props.searchTerm.toLowerCase() || transaction.description.toLowerCase() === this.props.searchTerm.toLowerCase()
    })
  }

  whatToRender() {
    if (!!this.props.searchTerm) {
      const transactions = this.sortBySearchTerm()
      return transactions.map(transaction => <Transaction transaction={transaction} />)
    } else {
      return this.props.transactions.map(transaction => <Transaction transaction={transaction} />)
    }
  }


  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">
                Posted At
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Description
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Category
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Amount
              </h3>
            </th>
          </tr>
            {this.whatToRender()}


        </tbody>
      </table>
    )
  }
}
