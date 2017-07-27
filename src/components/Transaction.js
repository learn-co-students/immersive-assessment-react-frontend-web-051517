import React from 'react'

const Transaction = ({info}) => {
  return (
    <tr>
      <td>{info.posted_at}</td>
      <td>{info.description}</td>
      <td>{info.category}</td>
      <td>{info.amount}</td>
    </tr>
  )
}

export default Transaction
