import React from 'react';
import './App.css';
import Routes from './Config/routes'
import data from './country'

console.log('data', data)

class App extends React.Component {
  render(){
    return(
      <Routes />
    )
  }
}

export default App;
