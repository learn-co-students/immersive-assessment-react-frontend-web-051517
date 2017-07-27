import React from 'react'
import AccountContainer from './AccountContainer'
import Transaction from './Transaction'

export default class TransactionsList extends React.Component{
    constructor(props){
      super(props)
    } //end constructor

   render(){
     const renderTransactions = this.props.transactions.map(tran =>
      <Transaction
        posted_at={tran.posted_at}
        description={tran.description}
        category={tran.category}
        amount={tran.amount}
      />) //end renderTransactions

      return(
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
                {renderTransactions}
          </tbody>
        </table>
        ) //end return
    } //end render
  } //end class
