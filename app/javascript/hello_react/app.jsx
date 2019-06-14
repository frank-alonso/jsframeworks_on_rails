import React from 'react'
import RowGenerator from './rowgenerator'
import axios from 'axios'

class App extends React.Component {
  state = {
    messages: {testkey: 'testvalue'}
  }


  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => {
        this.setState({isLoaded: true, messages: res.data.bpi});
      })
  }


  render () {
      return ( 
          <RowGenerator messages={this.state.messages}/>
        )
  }
}

export default App