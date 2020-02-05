import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Contact.css'
import Header from '../Header/Header'
import Footer from '../Header/Footer'

class Contact extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="main-body">
        <Header {...this.props} />
        <section id="banner-2">
          <div className="wrapper">
            <div className="d-table w-100">
              <div className="d-table-cell va-middle">
                <div className="banner-content">
                  <h2 className="ff-secondary">CONTACT US.</h2>
                  <p className="ff-primary fc-white">ONLINE SHOPPING WITH TRUSTED SHOPS.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrapper">
            <div className="sec-padding">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-content">
                    <h1 className="ff-secondary fc-blue">We are here for you – <br /><span>contact us!</span></h1>
                    <p className="ff-primary">Defective deliveries or unreceived, returned goods: when shopping online, it might happen that something goes wrong.</p>
                    <p className="ff-primary">But you don’t need to worry:<br />
                      the Trusted Shops service deals with it for you.</p>
                    <button className="btn-blue ff-primary">Contact Us</button>
                  </div>
                </div>
                <div className="col-md-6 relative-block">
                  <div className="contact-woman">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="contact-form">
          <div className="wrapper">
            <div className="sec-padding">
              <div className="forms">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-heading">
                      <h1 className="ff-primary fc-blue">Your information</h1>
                    </div>
                  </div>
                  {/* <div className="col-md-6">
                      <div className="contact-address">
                          <div className="details">
                            <div className="row">
                              <div className="col-md-1">
                              <div className="map-icon">
                                <i class="fa fa-map-marker"></i>
                              </div>
                              </div>
                              <div className="col-md-11">
                              <div className="map-detail">
                                <h4 className="ff-secondary">Address</h4>
                                <p className="ff-primary">Your Address Here Your Address Here</p>
                                </div>
                              </div>
                            </div>

                          </div>

                          <div className="details">
                            <div className="row">
                              <div className="col-md-1">
                              <div className="map-icon">
                                <i class="fa fa-phone"></i>
                              </div>
                              </div>
                              <div className="col-md-11">
                              <div className="map-detail">
                                <h4 className="ff-secondary">Phones</h4>
                                <p className="ff-primary">+000 1122 33333</p>
                                </div>
                              </div>
                            </div>

                          </div>

                          <div className="details margin-b">
                            <div className="row">
                              <div className="col-md-1">
                              <div className="map-icon">
                                <i class="fa fa-envelope"></i>
                              </div>
                              </div>
                              <div className="col-md-11">
                              <div className="map-detail">
                                <h4 className="ff-secondary">Email</h4>
                                <p className="ff-primary">Your email here</p>
                                </div>
                              </div>
                            </div>

                          </div>

                      </div>
                    </div> */}
                  <div className="col-md-12">
                    <div className="forms-content">
                      <form>

                        <input type="name" placeholder="First Name" />
                        <input type="name" placeholder="Last Name" />
                        <input type="email" placeholder="your-E-mail" />
                        <input type="phone" placeholder="Your Number" />

                      </form>
                    </div>
                    <div className="form-btn">
                      <button className="btn-blue ff-primary">
                        Send
                          </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <Footer {...this.props} />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Contact)