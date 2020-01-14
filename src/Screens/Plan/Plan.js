import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Plan.css'
import Header from '../Header/Header'
import Footer from '../Header/Footer'


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="main-body">
        <Header {...this.props} />
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
        <Footer {...this.props} />
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