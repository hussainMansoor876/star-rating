import React, { Component } from 'react';
import './CompanyProfile.css'

class Company extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div>

      </div>
    )
  }
}



const mapStateToProps = (state) => {
  console.log("mapToState", state.authReducer)
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (isLoggedIn) => dispatch(loginUser(isLoggedIn)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Company)