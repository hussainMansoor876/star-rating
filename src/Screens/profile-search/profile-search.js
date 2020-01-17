import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './profile-search.css'
import Header from '../Header/Header';
import profilesearch from '../../assets/img/user.png';

class Reviewer extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="profile-search">
		  <Header {...this.props} />

          <section id="banner-8">
            <div className="wrapper">
                <div className="d-table w-100">
                    <div className="d-table-cell va-middle">
                        <div className="banner-content">
                            <h2 className="ff-secondary">Search For Users</h2>
                            {/* <p className="ff-primary fc-white">The free version of ProvenExpert is — and always will be — free.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="profile-search-company">
          <div className="wrapper">
              <div className="sec-padding">
                {/* <div className="row"> 
                      <div className="col-md-12">
                        <div className="profile-search-heading">
                          <h2 className="ff-secondary">Search For Company Profile <span><i className="fa fa-building"></i></span></h2>
                        </div>
                      </div>
                  </div> */}
                
                <div className="profile-search-box">
                      <div className="row"> 
                        <div className="col-md-4 b-right">
                            <div className="profile-search-img">
                            <img src={profilesearch} />
                            <h5 className="ff-secondary">User Name</h5>
                            <h6 className="ff-secondary">User email</h6>
                            <h6 className="ff-secondary">271 Reviews <i className="fa fa-star"></i></h6>
                            </div>
                        </div>
                        <div className="col-md-8">
                          <div className="profile-search-content">
                                <div className="company-intro">
                                  <h5 className="ff-primary"><a href="#">User Company Website</a></h5>
                                     <h6 className="ff-secondary">Description:</h6>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="profile-search-company-contact">
                                  <h5 className="ff-secondary">Contact Information :</h5>
                                  <p className="ff-primary">203 East 50th St., Suite 1157, NY 10022, New York, United States of America</p>
                                  <p className="ff-primary"> user@example.com</p>
                                  <p className="ff-primary"> 0302-70041905 </p>
                                  <a href="#" className="ff-primary"><button> Read More </button></a>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="profile-search-box">
                      <div className="row"> 
                        <div className="col-md-4 b-right">
                            <div className="profile-search-img">
                            <img src={profilesearch} />
                            <h5 className="ff-secondary">User Name</h5>
                            <h6 className="ff-secondary">User email</h6>
                            <h6 className="ff-secondary">271 Reviews <i className="fa fa-star"></i></h6>
                            </div>
                        </div>
                        <div className="col-md-8">
                          <div className="profile-search-content">
                                <div className="company-intro">
                                  <h5 className="ff-primary"><a href="#">User Company Website</a></h5>
                                     <h6 className="ff-secondary">Description:</h6>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="profile-search-company-contact">
                                  <h5 className="ff-secondary">Contact Information :</h5>
                                  <p className="ff-primary">203 East 50th St., Suite 1157, NY 10022, New York, United States of America</p>
                                  <p className="ff-primary"> user@example.com</p>
                                  <p className="ff-primary"> 0302-70041905 </p>
                                  <a href="#" className="ff-primary"><button> Read More </button></a>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="profile-search-box">
                      <div className="row"> 
                        <div className="col-md-4 b-right">
                            <div className="profile-search-img">
                            <img src={profilesearch} />
                            <h5 className="ff-secondary">User Name</h5>
                            <h6 className="ff-secondary">User email</h6>
                            <h6 className="ff-secondary">271 Reviews <i className="fa fa-star"></i></h6>
                            </div>
                        </div>
                        <div className="col-md-8">
                          <div className="profile-search-content">
                                <div className="company-intro">
                                  <h5 className="ff-primary"><a href="#">User Company Website</a></h5>
                                     <h6 className="ff-secondary">Description:</h6>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="profile-search-company-contact">
                                  <h5 className="ff-secondary">Contact Information :</h5>
                                  <p className="ff-primary">203 East 50th St., Suite 1157, NY 10022, New York, United States of America</p>
                                  <p className="ff-primary"> user@example.com</p>
                                  <p className="ff-primary"> 0302-70041905 </p>
                                  <a href="#" className="ff-primary"><button> Read More </button></a>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="profile-search-box">
                      <div className="row"> 
                        <div className="col-md-4 b-right">
                            <div className="profile-search-img">
                            <img src={profilesearch} />
                            <h5 className="ff-secondary">User Name</h5>
                            <h6 className="ff-secondary">User email</h6>
                            <h6 className="ff-secondary">271 Reviews <i className="fa fa-star"></i></h6>
                            </div>
                        </div>
                        <div className="col-md-8">
                          <div className="profile-search-content">
                                <div className="company-intro">
                                  <h5 className="ff-primary"><a href="#">User Company Website</a></h5>
                                     <h6 className="ff-secondary">Description:</h6>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="profile-search-company-contact">
                                  <h5 className="ff-secondary">Contact Information :</h5>
                                  <p className="ff-primary">203 East 50th St., Suite 1157, NY 10022, New York, United States of America</p>
                                  <p className="ff-primary"> user@example.com</p>
                                  <p className="ff-primary"> 0302-70041905 </p>
                                  <a href="#" className="ff-primary"><button> Read More </button></a>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  
              </div>
          </div>
        </div>


        <footer>
          <div className="wrapper">
            <div className="sec-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="footer-list">
                    <h5 className="fc-white">Your Logo Here</h5>
                    <p className="fc-white ff-primary">Online shops are checked for compliance with the Trusted Shops quality criteria before they are awarded the trustmark that they can then display on their website. Our quality criteria
                       involve strict requirements as to the service quality as well as legal requirements.
                            </p>
                    <ul>

                      {/* <li><a href="#">Our Plain</a></li>
                                                    <li><a href="#">Pricing</a></li> */}
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="http://localhost:3000/privacy">Privacy Policy</a></li>

                    </ul>
                    <span className="footer-social">
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

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



export default connect(mapStateToProps, mapDispatchToProps)(Reviewer)