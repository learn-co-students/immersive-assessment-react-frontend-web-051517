import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
    {props.transactions.map((transaction)=>{
      return (
        <tr>

          <td>{transaction.posted_at}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
        </tr>
      )
    })}
    </tr>

  )
}

export default Transaction
