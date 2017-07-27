import React from 'react'

const TransactionHeader = (props) => {
  return(
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
  )
}

export default TransactionHeader
