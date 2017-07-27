import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  let filteredTransactions = props.transactions.filter(transaction => (
  transaction.description.toLowerCase().includes(props.searchTerm.toLowerCase() ||
  transaction.category.toLowerCase().includes(props.searchTerm.toLowerCase() ))

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

          {filteredTransactions.map(transaction => <Transaction transaction={transaction} /> )}

      </tbody>
    </table>
  )
}

export default TransactionsList
