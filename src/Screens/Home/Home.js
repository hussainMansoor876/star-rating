import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Home.css';
import logo from '../../assets/img/shoes.jpg';
import sole from '../../assets/img/sole-trader.jpg';
import trust from '../../assets/img/trust.png';
import testiimage from '../../assets/img/man.png'; // with import


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



        <section id="our-service">
          <div className="sec-padding">
            <div className="wrapper">
              <div className="our-service-main">
                <h1 className="fc-secondary fc-blue">Some of our <br></br>25,000+ shops</h1>
                <div className="row">
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${logo})`}}></div>
                      <div className="service-logo">
                      <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="fc-primary">Shose</span>
                        <h5 className="fc-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                            </ul>
                            <span className="fc-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${logo})`}}></div>
                      <div className="service-logo">
                      <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="fc-primary">Shose</span>
                        <h5 className="fc-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                            </ul>
                            <span className="fc-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${logo})`}}></div>
                      <div className="service-logo">
                      <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="fc-primary">Shose</span>
                        <h5 className="fc-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                            </ul>
                            <span className="fc-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${logo})`}}></div>
                      <div className="service-logo">
                      <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="fc-primary">Shose</span>
                        <h5 className="fc-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                            </ul>
                            <span className="fc-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${logo})`}}></div>
                      <div className="service-logo">
                      <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="fc-primary">Shose</span>
                        <h5 className="fc-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                            </ul>
                            <span className="fc-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${logo})`}}></div>
                      <div className="service-logo">
                      <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="fc-primary">Shose</span>
                        <h5 className="fc-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                              <li><i class="fa fa-star"></i></li>
                            </ul>
                            <span className="fc-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial">
          <div className="sec-padding">
            <div className="wrapper">
              <div className="testimonial-main">
                <div className="row">
                  <div className="col-md-6">
                    <div className="tetimoial-left"  style={{ backgroundImage: `url(${testiimage})`}}>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="testimonial-content">
                    <h3 className="fc-secondary fc-blue">Authentic reviews by</h3>
                    <h2 className="fc-secondary fc-blue">real customers</h2>
                    <p className="fc-primary">Have the indicated delivery times been fulfilled? How does the customer service deal with problems? Does the product correspond to the description?</p>
                    <p className="fc-primary">You can find reliable answers to all these questions in the reviews posted by other customers like you. But shop and product reviews are only helpful if they are really authentic. That’s what the Trusted Shops review system is there for: for you to be able to rely on authentic reviews by real customers.</p>
                  <button>Visit our FAQs</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certified-shops">
          <div className="sec-padding">
            <div className="wrapper">
              <div className="certified-shops-main">
                <div className="certified-shops-content">
                    <h3 className="fc-secondary fc-blue">The sign of trust for</h3>
                    <h2 className="fc-secondary fc-blue">certified shops</h2>
                    <p className="fc-primary">Online shops are checked for compliance with the Trusted Shops quality criteria before they are awarded the trustmark that they can then display on their website. Our quality criteria involve strict requirements as to the service quality as well as legal requirements.</p>
                    <p className="fc-primary">The security resulting from the trustmark, authentic customer reviews, and the money-back guarantee offered by the European leading trust brand is indeed very much appreciated by customers across the globe.</p>
                    <button>Visit our FAQs</button>
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