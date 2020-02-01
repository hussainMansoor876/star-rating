import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Plan.css'
import Header from '../Header/Header'
import Footer from '../Header/Footer'
import StripeCheckout from 'react-stripe-checkout'
import { Icon, notification } from 'antd';
import axios from 'axios'


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      amount: 24.90 * 100,
      name: "Star Rating"
    }
  }

  openNotification = (title, desc, icon, color = '#108ee9') => {
    notification.open({
      message: title,
      description: desc,
      icon: <Icon type={icon} style={{ color: color }} />,
    });
  };


  async handleToken(token) {
    const { amount, name } = this.state
    var product = {
      amount,
      name
    }
    const response = await axios.post(
      "https://star-rating123.herokuapp.com/post/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      this.openNotification("Success!", "Check email for details", 'check')
    } else {
      this.openNotification("Error!", "Something went wrong", 'check')
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
                    <h1 className="ff-secondary fc-blue">SELECT PLAN</h1>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="price-description">
                    <div className="price-detail bg-primary">
                      <i class="fa fa-home fc-white"></i>
                      <h4 className="ff-secondary fc-white"> MONTHLY</h4>
                      <h5 className="ff-secondary fc-white">$ 24.90<span>/m</span></h5>
                      <p className="ff-primary fc-white">Monhtly Plan</p>
                    </div>

                    <div className="price-btn">
                      <StripeCheckout
                        stripeKey="pk_test_Lh2CKCRHvCf7KgPVftBL7tu900oQMdN2v5"
                        token={(e) => this.handleToken(e)}
                        // billingAddress
                        // shippingAddress
                        amount={24.90 * 100}
                      >
                        <button className="ff-primary" onClick={() => this.setState({ amount: 24.90 * 100 })}>Join Now</button>
                      </StripeCheckout>
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

                <div className="col-lg-6 col-md-6">
                  <div className="price-description mb-o">
                    <div className="price-detail bg-primary">
                      <i class="fa fa-home fc-white"></i>
                      <h4 className="ff-secondary fc-white">YEARLY</h4>
                      <h5 className="ff-secondary fc-white">$ 240<span>/m</span></h5>
                      <p className="ff-primary fc-white">you save $ 120 per year</p>
                    </div>

                    <div className="price-btn">
                      <StripeCheckout
                        stripeKey="pk_test_Lh2CKCRHvCf7KgPVftBL7tu900oQMdN2v5"
                        token={(e) => this.handleToken(e)}
                        // billingAddress
                        // shippingAddress
                        amount={240 * 100}
                      >
                        <button className="ff-primary" onClick={() => this.setState({ amount: 240 * 100 })}>Join Now</button>
                      </StripeCheckout>
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