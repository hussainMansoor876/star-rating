import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Search.css';
import Header from '../Header/Header';
import search from '../../assets/img/search-1.png';

class Search extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div class="search-page">
        <Header {...this.props} />

        <section id="banner-7">
            <div className="wrapper">
                <div className="d-table w-100">
                    <div className="d-table-cell va-middle">
                        <div className="banner-content">
                            <h2 className="ff-secondary">Search For Companies</h2>
                            {/* <p className="ff-primary fc-white">The free version of ProvenExpert is — and always will be — free.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="search-company">
          <div className="wrapper">
              <div className="sec-padding">
                {/* <div className="row"> 
                      <div className="col-lg-12">
                        <div className="search-heading">
                          <h2 className="ff-secondary">Search For Company Profile <span><i className="fa fa-building"></i></span></h2>
                        </div>
                      </div>
                  </div> */}
                  <div className="search-box">
                      <div className="row"> 
                        <div className="col-lg-4 col-md-4 col-sm-4 search-b-right">
                            <div className="search-img">
                            <img src={search} />
                            <h5 className="ff-secondary">Company Name</h5>
                            <h6 className="ff-secondary">Reviews: 50,000,00 <i className="fa fa-star"></i></h6>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          <div className="search-content">
                                <div className="company-intro">
                                  <h5 className="ff-primary"><a href="#">Company Website</a></h5>
                                      <span className="search-stars-icon">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </span>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="row">
                                <div className="col-lg-6 col-md-5">
                                    <div className="search-company-contact">
                                      <h5 className="ff-secondary">Contact Information :</h5>
                                      <p className="ff-primary">Quedlinburger,Street # 110589,Berlin,Germany</p>
                                      <p className="ff-primary"> company@example.com</p>
                                      <p className="ff-primary"> 0302-70041905 , 0302-70041400</p>
                                      <p className="search-social-icon">
                                        <a href="#"> <i className="fa fa-facebook"></i></a>
                                        <a href="#"> <i className="fa fa-twitter"></i></a>
                                        <a href="#"> <i className="fa fa-instagram"></i></a>
                                        <a href="#"> <i className="fa fa-linkedin"></i></a>
                                      </p>
                                      
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-7">
                                    <div className="search-company-time">
                                      <h5 className="ff-secondary">Opening Hours :</h5>
                                      <p className="ff-primary">Monday - Tuesday <span>09:00 am-06:00 pm</span></p>
                                      <p className="ff-primary">Wednesday - Friday <span>09:00 am-06:00 pm</span></p>
                                      <p className="ff-primary">Saturday - Sunday <span>Closed</span></p>
                                      <a href="#" className="ff-primary"><button> Read More </button></a>
                                    </div>
                                  </div>
                                  
                                </div> 
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="search-box">
                      <div className="row"> 
                        <div className="col-lg-4 col-md-4 col-sm-4 search-b-right">
                            <div className="search-img">
                            <img src={search} />
                            <h5 className="ff-secondary">Company Name</h5>
                            <h6 className="ff-secondary">Reviews: 50,000,00 <i className="fa fa-star"></i></h6>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          <div className="search-content">
                                <div className="company-intro">
                                  <h5 className="ff-primary"><a href="#">Company Website</a></h5>
                                      <span className="search-stars-icon">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </span>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="row">
                                <div className="col-lg-6 col-md-5">
                                    <div className="search-company-contact">
                                      <h5 className="ff-secondary">Contact Information :</h5>
                                      <p className="ff-primary">Quedlinburger,Street # 110589,Berlin,Germany</p>
                                      <p className="ff-primary"> company@example.com</p>
                                      <p className="ff-primary"> 0302-70041905 , 0302-70041400</p>
                                      <p className="search-social-icon">
                                        <a href="#"> <i className="fa fa-facebook"></i></a>
                                        <a href="#"> <i className="fa fa-twitter"></i></a>
                                        <a href="#"> <i className="fa fa-instagram"></i></a>
                                        <a href="#"> <i className="fa fa-linkedin"></i></a>
                                      </p>
                                      
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-7">
                                    <div className="search-company-time">
                                      <h5 className="ff-secondary">Opening Hours :</h5>
                                      <p className="ff-primary">Monday - Tuesday <span>09:00 am-06:00 pm</span></p>
                                      <p className="ff-primary">Wednesday - Friday <span>09:00 am-06:00 pm</span></p>
                                      <p className="ff-primary">Saturday - Sunday <span>Closed</span></p>
                                      <a href="#" className="ff-primary"><button> Read More </button></a>
                                    </div>
                                  </div>
                                  
                                </div> 
                            </div>
                        </div>
                      </div>
                  </div>

                  <div className="search-box">
                      <div className="row"> 
                        <div className="col-lg-4 col-md-4 col-sm-4 search-b-right">
                            <div className="search-img">
                            <img src={search} />
                            <h5 className="ff-secondary">Company Name</h5>
                            <h6 className="ff-secondary">Reviews: 50,000,00 <i className="fa fa-star"></i></h6>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          <div className="search-content">
                                <div className="company-intro">
                                  <h5 className="ff-primary"><a href="#">Company Website</a></h5>
                                      <span className="search-stars-icon">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                      </span>
                                    <p className="ff-primary">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem 
                                    Ipsum has been the industry's standard 
                                    dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="row">
                                <div className="col-lg-6 col-md-5">
                                    <div className="search-company-contact">
                                      <h5 className="ff-secondary">Contact Information :</h5>
                                      <p className="ff-primary">Quedlinburger,Street # 110589,Berlin,Germany</p>
                                      <p className="ff-primary"> company@example.com</p>
                                      <p className="ff-primary"> 0302-70041905 , 0302-70041400</p>
                                      <p className="search-social-icon">
                                        <a href="#"> <i className="fa fa-facebook"></i></a>
                                        <a href="#"> <i className="fa fa-twitter"></i></a>
                                        <a href="#"> <i className="fa fa-instagram"></i></a>
                                        <a href="#"> <i className="fa fa-linkedin"></i></a>
                                      </p>
                                      
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-7">
                                    <div className="search-company-time">
                                      <h5 className="ff-secondary">Opening Hours :</h5>
                                      <p className="ff-primary">Monday - Tuesday <span>09:00 am-06:00 pm</span></p>
                                      <p className="ff-primary">Wednesday - Friday <span>09:00 am-06:00 pm</span></p>
                                      <p className="ff-primary">Saturday - Sunday <span>Closed</span></p>
                                      <a href="#" className="ff-primary"><button> Read More </button></a>
                                    </div>
                                  </div>
                                  
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
                <div className="col-lg-12">
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



export default connect(mapStateToProps, mapDispatchToProps)(Search)