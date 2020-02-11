import React, { Component } from 'react';
import { loginUser, removeUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Home.css';
import logo from '../../assets/img/shoes.jpg';
import sole from '../../assets/img/sole-trader.jpg';
import trust from '../../assets/img/trust-2.png';
import testiimage from '../../assets/img/man.png'; // with import
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Header/Footer'
import { Rate } from 'antd'
import axios from 'axios'


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      company: []
    }
  }

  componentDidMount() {
    axios.get('https://star-rating123.herokuapp.com/get/get-company')
      .then((res) => {
        console.log(res)
        const { data } = res
        if (data.success && data.data.length) {
          this.setState({
            company: data.data
          })
        }
      })
  }


  render() {
    const { company } = this.state
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
                  {company.length ? company.map((v, i) => {
                    var reviews = v.reviews
                    var count = 0
                    for (var j of reviews) {
                      count += (j.applicationStars + j.featuresStars + j.clarityStars + j.privacyStars + j.customerService) / 5
                    }
                    count /= reviews.length
                    return (
                      <div className="col-md-4" key={i}>
                        <div className="service">
                          <div className="service-image" style={{ backgroundImage: `url(${v.profilePic.url})` }}></div>
                          <div className="service-content">
                            <span className="ff-primary">{v.name}</span>
                            <h5 className="ff-primary">{v.url}</h5>
                            <div style={{
                              display: 'flex',
                              justifyContent: 'space-between'
                            }}>
                              {/* <img src={v.profilePic.url} /> */}
                              <div className="starrd">
                                <Rate disabled defaultValue={count} style={{ color: '#0c94ac' }} />
                                <span className="ff-primary">{count}/5.00</span>
                              </div>
                              <div className="inputcol-2 edit1">
                                <Link to={`/company-view/${v._id}`}>
                                  <button className="btn-blue ff-primary" style={{ width: '80px' }}>View</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }) : null}
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