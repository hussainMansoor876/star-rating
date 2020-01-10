import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Impressum.css'
import Header from '../Header/Header'

class Impressum extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  console.log("mapToState", state.authReducer)
  return {
    user: state.authReducer.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Impressum)