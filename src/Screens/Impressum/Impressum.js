import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Impressum.css'

class Impressum extends React.Component {

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



export default connect(mapStateToProps, mapDispatchToProps)(Impressum)