import React from 'react'
import Transaction from './Transaction'
import TransactionHeader from './TransactionHeader'

const TransactionsList = (props) => {
  const transactions = props.transactions
  return (

          <Transaction transactions={transactions}/>

  )
}

export default TransactionsList
