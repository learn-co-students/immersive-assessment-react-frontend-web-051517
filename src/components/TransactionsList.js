import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  const {transactions, searchTerm} = props

  function transactionsFilter(transaction) {
    const regex = new RegExp(searchTerm, 'gi')
    return !!transaction.description.match(regex) || !!transaction.category.match(regex)
  }

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

        {
          transactions
            .filter(transactionsFilter)
            .map((transaction) => {
              return <Transaction key={transaction.id} transaction={transaction}/>
            })
        }

      </tbody>
    </table>
  )
}

export default TransactionsList
