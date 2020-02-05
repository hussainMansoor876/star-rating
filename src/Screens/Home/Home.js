import React, { Component } from 'react';
import { loginUser, removeUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Home.css';
import logo from '../../assets/img/shoes.jpg';
import sole from '../../assets/img/sole-trader.jpg';
import trust from '../../assets/img/trust-2.png';
import testiimage from '../../assets/img/man.png'; // with import
import slider1 from '../../assets/img/slider-1.jpg';
import slider2 from '../../assets/img/slider-2.jpg';
import slider3 from '../../assets/img/slider-3.jpg';
import slider4 from '../../assets/img/slider-4.jpg';
import slider5 from '../../assets/img/slider-5.jpg';
import Header from '../Header/Header'
import Footer from '../Header/Footer'
import { Link } from 'react-router-dom'


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }


  render() {
    const { user } = this.props
    return (
      <div className="main-body">
        <Header {...this.props} />
        <section id="banner">
          <div className="wrapper">
            <div className="d-table w-100">
              <div className="d-table-cell va-middle">
                <div className="banner-content">
                  <h2 className="ff-secondary">CLICK.<br />
                    <span className="fc-blue">SHOP.</span><br />
                    SAFE.</h2>
                  <p className="ff-primary fc-white">ONLINE SHOPPING WITH TRUSTED SHOPS.</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="our-service">
          <div className="sec-padding">
            <div className="wrapper">
              <div className="our-service-main">
                <h1 className="ff-secondary fc-blue">Some of our <br /><span>25,000+ shops</span></h1>
                <div className="row">
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${logo})` }}></div>
                      <div className="service-logo">
                        <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="ff-primary">Shose</span>
                        <h5 className="ff-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span className="ff-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${slider5})` }}></div>
                      <div className="service-logo">
                        <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="ff-primary">Shose</span>
                        <h5 className="ff-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span className="ff-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${slider4})` }}></div>
                      <div className="service-logo">
                        <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="ff-primary">Shose</span>
                        <h5 className="ff-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span className="ff-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${slider3})` }}></div>
                      <div className="service-logo">
                        <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="ff-primary">Shose</span>
                        <h5 className="ff-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span className="ff-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${slider2})` }}></div>
                      <div className="service-logo">
                        <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="ff-primary">Shose</span>
                        <h5 className="ff-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span className="ff-primary">4.66/5.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service">
                      <div className="service-image" style={{ backgroundImage: `url(${slider1})` }}></div>
                      <div className="service-logo">
                        <img src={sole} />
                      </div>
                      <div className="service-content">
                        <span className="ff-primary">Shose</span>
                        <h5 className="ff-primary">soletrader.co.uk</h5>
                        <div className="service-content-star">
                          <img src={trust} />
                          <div className="starr">
                            <ul>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                            </ul>
                            <span className="ff-primary">4.66/5.00</span>
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
                  <div className="col-md-6 relative-block">
                    <div className="tetimoial-left" style={{ backgroundImage: `url(${testiimage})` }}>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="testimonial-content">
                      <h1 className="ff-secondary fc-blue">Authentic reviews by <br /><span>real customers</span></h1>
                      <p className="ff-primary">Have the indicated delivery times been fulfilled? How does the customer service deal with problems? Does the product correspond to the description?</p>
                      <p className="ff-primary">You can find reliable answers to all these questions in the reviews posted by other customers like you. But shop and product reviews are only helpful if they are really authentic. That’s what the Trusted Shops review system is there for: for you to be able to rely on authentic reviews by real customers.</p>
                      <button className="btn-blue ff-primary">Visit our FAQs</button>
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
              <div className="row">
                <div className="col-md-8">
                  <div className="certified-shops-main">
                    <div className="certified-shops-content">
                      <h1 className="ff-secondary fc-blue">The sign of trust for <br /><span>certified shops</span></h1>
                      <p className="ff-primary">Online shops are checked for compliance with the Trusted Shops quality criteria before they are awarded the trustmark that they can then display on their website. Our quality criteria involve strict requirements as to the service quality as well as legal requirements.</p>
                      <p className="ff-primary">The security resulting from the trustmark, authentic customer reviews, and the money-back guarantee offered by the European leading trust brand is indeed very much appreciated by customers across the globe.</p>
                      <button className="btn-blue ff-primary">Visit our FAQs</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="shop-image">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section id="guarruanty">
          <div className="wrapper">
            <div className="sec-padding">
              <div className="row">
                <div className="col-md-6 relative-block">
                  <div className="gurraunty-man">

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="guarruanty-content">
                    <h1 className="ff-secondary fc-blue">The sign of trust for <br /><span>certified shops</span></h1>
                    <p className="ff-primary">Online shops are checked for compliance with the Trusted Shops quality criteria before they are awarded the trustmark that they can then display on their website. Our quality criteria involve strict requirements as to the service quality as well as legal requirements.</p>
                    <p className="ff-primary">The security resulting from the trustmark, authentic customer reviews, and the money-back guarantee offered by the European leading trust brand is indeed very much appreciated by customers across the globe.</p>
                    <button className="btn-blue ff-primary">Visit our FAQs</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {!user ? <section id="join-now">
          <div className="wrapper">
            <div className="sec-padding">
              <div className="row">
                <div className="col-md-9">
                  <div className="join-now-content">
                    <h1 className="ff-secondary fc-white">
                      Join now <span>for free</span> and get started!
                        </h1>
                    <p className="ff-primary fc-white">
                      Try our PREMIUM plan for 30 days for free and non-binding
                        </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="join-now-button">
                    <Link to="/register">
                      <button className="btn-white ff-primary">Sign up now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> : null}

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
                    <Link to="/contact">
                      <button className="btn-blue ff-primary">Contact Us</button>
                    </Link>
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
    removeUser: () => dispatch(removeUser()),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)