import React from 'react'

const Transaction = (props) => {
  return (
    <table className="ui celled striped padded table">
    <theader>
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
    </theader>
    <tbody>
      {props.transactions.map((transaction) => (
        <row>
          <td>{transaction.posted_at}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
        </row>
      ))}
    </tbody>
  </table>

  )
}

export default Transaction
