import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Home.css'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="main-body">


          <header>
              <div className="wrapper">
                <div className="row">
                  <div className="col-md-3">
                    <div className="main-logo">
                      <h5 className="fc-blue">Your Logo Here</h5>
                  </div>
                </div>
                <div className="col-md-9">
                      <nav className="nav-list">
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Home</a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
              </div>

            </header>



          <section id="banner">
              <div className="wrapper">
                <div className="d-table w-100">
                  <div className="d-table-cell va-middle">
                    <div className="banner-content">
                        <h2 className=".fc-secondary">CLICK.<br />
                            <span className="fc-blue">SHOP.</span><br />
                            SAFE.</h2>
                            <p className="fc-primary fc-white">ONLINE SHOPPING WITH TRUSTED SHOPS.</p>
                    </div>
                  </div>
                </div>
              </div>
          </section>


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



export default connect(mapStateToProps, mapDispatchToProps)(Home)