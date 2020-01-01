import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Plan.css'

class Search extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="main-body">


<div className="top-bar">
          <div className="wrapper">
          <form action="javascript:void(0)" method="get">
            <div className="input-group">
              <input type="text" name="search" id="search" className="form-control" placeholder="Search For ..." autocomplete="off" />
              <div className="input-group-addon" id="order">
                <div className="select-style">
                  <select name="order">
                    <option value="" disabled>Select Your Type</option>
                    <option value="a" selected>A</option>
                    <option value="b">B</option>
                  </select>
                </div>
              </div>
              <div className="input-group-addon" id="sub">
                <button className="submit" type="submit">
                  <span className="fa fa-search"></span>
                </button>
              </div>
            </div>
          </form>
          </div>

        </div>


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
                    <li><a href="http://localhost:3000/home">Home</a></li>
                    <li><a href="http://localhost:3000/plan">Plan</a></li>
                    <li><a href="http://localhost:3000/companyprofile">Company Profile</a></li>
                    <li><a href="http://localhost:3000/contact">Contact Us</a></li>
                    <li className="nav-login"><a href="http://localhost:3000">login</a></li>
                    <li className="nav-signup"><a href="http://localhost:3000/register">Register</a></li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>

        </header>

        <div className="mob-section">
       <div className="wrapper">
       <div className="row">
          <div className="col-md-6">
          <div className="main-logo">
                  <h5 className="fc-blue">Your Logo Here</h5>
                </div>
          </div>
          <div className="col-md-6">
          <div class="mobile-nav" id="nav">
         <a href="#">
            <div class="mob-nav-logo ptpx-15 pbpx-15 plpx-30">
            <div className="main-logo">
                  <h5 className="fc-blue">Your Logo Here</h5>
                </div>
            </div>
         </a>
         <nav>
            <div className="mob-nav-list">
               <ul>
               <li><a href="http://localhost:3000/home">Home</a></li>
              <li><a href="http://localhost:3000/plan">Plan</a></li>
              <li><a href="http://localhost:3000/companyprofile">Company Profile</a></li>
              <li><a href="http://localhost:3000/contact">Contact Us</a></li>
              <li className="nav-login"><a href="http://localhost:3000">login</a></li>
              <li className="nav-signup"><a href="http://localhost:3000/register">Register</a></li>
               </ul>
            </div>
         </nav>
      </div>
      <div class="mobile-nav-btn">
         <span class="lines"></span>
      </div>
          </div>
        </div>
       </div>
      </div>



        <section id="banner-3">
          <div className="wrapper">
            <div className="d-table w-100">
              <div className="d-table-cell va-middle">
                <div className="banner-content">
                  <h2 className="ff-secondary">Pricing and Features</h2>
                  <p className="ff-primary fc-white">The free version of ProvenExpert is — and always will be — free.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="pricing">
          <div className="wrapper">
            <div className="sec-padding">
              <div className="row">
                <div className="col-md-12">
                    <div className="price-heading">
                    <h1 className="ff-secondary fc-blue">MOST POPULAR</h1>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="price-description">
                      <div className="price-detail bg-primary">
                        <i class="fa fa-user fc-white"></i>
                        <h4 className="ff-secondary fc-white">FREE</h4>
                        <h5 className="ff-secondary fc-white">$ 00.00<span>/m</span></h5>
                        <p className="ff-primary fc-white">NOW</p>
                      </div>

                      <div className="price-btn">
                        <button className="ff-primary">Join Now</button>
                      </div>
                      <div className="price-list">
                        <ul>
                        <li>10</li>
                        <li>5</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li>-</li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        </ul>
                      </div>

                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="price-description">
                      <div className="price-detail bg-primary">
                        <i class="fa fa-home fc-white"></i>
                        <h4 className="ff-secondary fc-white"> BASIC</h4>
                        <h5 className="ff-secondary fc-white">$ 24.90<span>/m</span></h5>
                        <p className="ff-primary fc-white">you save $ 60 per year</p>
                      </div>

                      <div className="price-btn">
                        <button className="ff-primary">Join Now</button>
                      </div>
                      <div className="price-list">
                        <ul>
                        <li>50</li>
                        <li>25</li>
                        <li>3 platforms</li>
                        <li>-</li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        </ul>
                      </div>

                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="price-description mb-o">
                      <div className="price-detail bg-primary">
                        <i class="fa fa-home fc-white"></i>
                        <h4 className="ff-secondary fc-white"> PLUS</h4>
                        <h5 className="ff-secondary fc-white">$ 39.90<span>/m</span></h5>
                        <p className="ff-primary fc-white">you save $ 120 per year</p>
                      </div>

                      <div className="price-btn">
                        <button className="ff-primary">Join Now</button>
                      </div>
                      <div className="price-list">
                        <ul>
                        <li>250</li>
                        <li>50</li>
                        <li>5 platforms</li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        </ul>
                      </div>

                    </div>
                </div>


                <div className="col-lg-3 col-md-6">
                    <div className="price-description mb-o">
                      <div className="price-detail bg-primary">
                        <i class="fa fa-home fc-white"></i>
                        <h4 className="ff-secondary fc-white">PREMIUM</h4>
                        <h5 className="ff-secondary fc-white">$ 79.90<span>/m</span></h5>
                        <p className="ff-primary fc-white">you save $ 60 per year</p>
                      </div>

                      <div className="price-btn">
                        <button className="ff-primary">Join Now</button>
                      </div>
                      <div className="price-list">
                        <ul>
                        <li>Unlimited</li>
                        <li>Unlimited</li>
                        <li>Unlimited</li>
                        <li>Unlimited</li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        <li><i class="fa fa-check"></i></li>
                        </ul>
                      </div>

                    </div>
                </div>

              </div>

            </div>
          </div>

        </section>

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
                            <li><a href="#">Heplcenter</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Our Plain</a></li>
                            <li><a href="#">Pricing</a></li>

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
    isLoggedIn: state.authReducer.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (isLoggedIn) => dispatch(loginUser(isLoggedIn)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Search)