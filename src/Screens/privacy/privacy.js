import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './privacy.css'
import Header from '../Header/Header'
import Footer from '../Header/Footer'


class Privacy extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className="main-body">
                <Header {...this.props} />
                <section id="banner-4">
                    <div className="wrapper">
                        <div className="d-table w-100">
                            <div className="d-table-cell va-middle">
                                <div className="banner-content">
                                    <h2 className="ff-secondary">Our Privacy and Policies</h2>
                                    <p className="ff-primary fc-white">The free version of ProvenExpert is — and always will be — free.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="privacy-content">
                    <div className="wrapper">
                        <div className="sec-padding">
                            <div className="privacy-heading">
                                <h1 className="ff-secondary fc-blue">PRIVACY POLICY</h1>
                            </div>

                            <div className="privacy-paragraph">
                                <p className="ff-primary">This privacy policy applies between you, the User of this Website and Star rating Limited, the owner and provider of this Website. Star rating Limited takes
                                      the privacy of your information very seriously. This privacy policy applies to our
                                     use of any and all Data collected by us or provided by you in relation to your use of the Website.
                                         </p>
                                <p className="ff-primary">
                                    This privacy policy should be read alongside,
                                     and in addition to, our Terms and Conditions,<br />

                                    Please read this privacy policy carefully.
                                    </p>
                            </div>

                            <div className="privacy-heading">
                                <h1 className="ff-secondary fc-blue">Definitions and interpretation</h1>
                            </div>

                            <div className="privacy-list">

                                <ul>
                                    <li>In this privacy policy, unless the context requires a different interpretation:
                                            <ul>
                                            <li>the singular includes the plural and vice versa;</li>
                                            <li>references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy;</li>
                                            <li>a reference to a person includes firms, companies, government entities, trusts and partnerships;</li>
                                            <li>"including" is understood to mean "including without limitation";</li>
                                            <li>the headings and sub-headings do not form part of this privacy policy.</li>
                                        </ul>
                                    </li>
                                    <li>This privacy policy applies only to the actions of Star rating Limited and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.</li>
                                    <li>For purposes of the applicable Data Protection Laws, Star rating Limited is the "data controller". This means that Star rating Limited determines the purposes for which, and the manner in which, your Data is processed.</li>
                                    <li>We may collect the following Data, which includes personal Data, from you:
                                            <ul>
                                            <li>name;</li>
                                            <li>contact Information such as email addresses and telephone numbers;</li>
                                            <li>demographic information such as postcode, preferences and interests;</li>
                                            <li>IP address (automatically collected);</li>
                                            <li>social media name;in each case, in accordance with this privacy policy.</li>

                                        </ul>
                                    </li>
                                    <li>We collect Data in the following ways:
                                            <ul>
                                            <li>data is given to us by you ; and</li>
                                            <li>data is collected automatically.</li>
                                        </ul>
                                    </li>
                                    <li>Star rating Limited will collect your Data in a number of ways, for example:
                                            <ul>
                                            <li>when you contact us through the Website, by telephone, post, e-mail or through any other means;</li>
                                            <li>when you register with us and set up an account to receive our products/services;</li>
                                            <li>when you make payments to us, through this Website or otherwise;</li>
                                            <li>when you use our services;in each case, in accordance with this privacy policy.</li>
                                        </ul>
                                    </li>

                                    <li>To the extent that you access the Website, we will collect your Data automatically, for example:
                                            <ul>
                                            <li>we automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content.</li>
                                            <li>we will collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information about cookies, and how we use them on the Website, see the section below, headed "Cookies".</li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>

                            <div className="privacy-heading">
                                <h1 className="ff-secondary fc-blue">General</h1>
                            </div>

                            <div className="privacy-paragraph ta-center">
                                <p className="ff-primary">
                                    ou may not transfer any of your rights under this privacy policy to any other person.
                                     We may transfer our rights under this privacy policy where we reasonably
                                     believe your rights will not be affected.
                                    </p>
                                <p className="ff-primary">
                                    If any court or competent authority finds that any provision of this privacy
                                    policy (or part of any provision) is invalid, illegal or unenforceable, that
                                     provision or part-provision will, to the extent required, be deemed to be deleted,
                                     and the validity and enforceability of the other provisions of this privacy policy will not be affected.
                                    </p>
                            </div>

                            <div className="privacy-heading">
                                <h1 className="ff-secondary fc-blue">Cookies</h1>
                            </div>

                            <div className="privacy-paragraph ta-center">
                                <p className="ff-primary">
                                    Below is a list of the cookies that we use. We have tried to ensure this is complete and up to date,
                                    but if you think that we have missed a cookie or there is any discrepancy, please let us know.
                                    </p>
                            </div>

                        </div>
                    </div>
                    <Footer {...this.props} />
                </section>
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



export default connect(mapStateToProps, mapDispatchToProps)(Privacy)