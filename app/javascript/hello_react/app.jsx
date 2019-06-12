import React from 'react'

class App extends React.Component {
  state = {
    name: 'React',
    messages: []
  }

  render () {
      return ( 
          <table className="table table-striped">
          <tbody><tr><td>Test</td></tr></tbody>
          </table>
        )
  }
}

export default App