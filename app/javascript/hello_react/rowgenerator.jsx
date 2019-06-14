import React from 'react'
import axios from 'axios'



class RowGenerator extends React.Component {
  state = {
    messages: []
  }

  generateRows(messages) {
    console.log(messages);
    return Object.keys(messages).map((message) => (
        <tr><td>{message}</td></tr>
      ));        
  }

  render () {
      return ( 
          <table className="table table-striped">
            <tbody>
              {this.generateRows(this.props.messages)}
            </tbody>
          </table>
        )
  }
}

export default RowGenerator