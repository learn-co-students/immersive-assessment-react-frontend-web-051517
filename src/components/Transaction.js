import React from 'react'
import TransactionsList from './TransactionsList'
import AccountContainer from './AccountContainer'

const Transaction = (props) => {
  console.log(props)
  return (
    <tr>
      <td>{props.posted_at}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  )
}

export default Transaction
