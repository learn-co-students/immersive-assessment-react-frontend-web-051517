import React from 'react'

const Transaction = (props) => {
  const {posted_at, amount, category, description} = props.transaction
  
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
