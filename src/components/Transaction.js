import React from 'react'

const Transaction = ({posted_at, description, category, amount}) => {
  return (
    <tr>
      <td>{posted_at}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default Transaction
