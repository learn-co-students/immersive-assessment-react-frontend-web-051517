import React from 'react'
import Transaction from './Transaction'

const TransactionsList = props => {
  const filteredTransactionsList = props.transactions.filter(transaction => {
    const regExp = new RegExp(props.searchTerm, "gi")
    return (transaction.description.match(regExp) || transaction.category.match(regExp))
  })
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

        {filteredTransactionsList.map(transaction => {
          return (<Transaction key={transaction.id} transaction={transaction} />)
        })}


      </tbody>
    </table>
  )
}

export default TransactionsList
