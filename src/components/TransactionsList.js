import React from 'react'

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

        {props.transactions.map(x=>{
          return (
            <tr key={x.id}>
              <td>{x.posted_at}</td>
              <td>{x.description}</td>
              <td>{x.category}</td>
              <td>{x.amount}</td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}

export default TransactionsList
