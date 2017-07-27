import React from 'react'
import Transaction from './Transaction.js'

const TransactionsList = (props) => {

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
          props.searchResults.map((transaction) => {
            return <Transaction transaction={transaction}/>
          })
          // console.log(props.transactions)
          // props.searchTerm === '' ?
          //   props.transactions.map((transaction) => {
          //     return  <Transaction transaction={transaction}/>
          //   })
          // :
          //   props.transactions.filter(transaction => transaction.description.toLowerCase().includes(props.searchTerm.toLowerCase()) || transaction.category.toLowerCase().includes(props.searchTerm.toLowerCase()) ).map((transaction) => {
          //       return <Transaction transaction={transaction}/>
          // })
          }

      </tbody>
    </table>
  )
}

export default TransactionsList
