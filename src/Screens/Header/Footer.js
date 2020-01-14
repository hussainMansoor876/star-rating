import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { removeUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
var $ = require("jquery");


class Footer extends Component {
    constructor(props) {
        super(props)
    }



    render() {

        return (
            <div>
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
                                            <li><Link to="/contact">Contact Us</Link></li>
                                            <li><Link to="/privacy">Privacy Policy</Link></li>

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
        removeUser: () => dispatch(removeUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
