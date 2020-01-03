import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './privacy.css'
import logonew from '../../assets/img/new-logo.png';

class Privacy extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return (
        <div className="main-body">

                    {/* <div className="top-bar">
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

                    </div> */}


                    <header>
                    <div className="wrapper">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="main-logo">
                            <a href='#'><img src={logonew} /></a>
                            <form action="javascript:void(0)" method="get">
                                <div className="input-group">
                                <div className="input-group-addon" id="order">
                                    <div className="select-style">
                                    <select name="order">
                                        <option value="" disabled>Select Your Type</option>
                                        <option value="a" selected>A</option>
                                        <option value="b">B</option>
                                    </select>
                                    </div>
                                </div>
                                <input type="text" name="search" id="search" className="form-control" placeholder="Search For ..." autocomplete="off" />
                                <div className="input-group-addon" id="sub">
                                    <button className="submit" type="submit">
                                    <span className="fa fa-search"></span>
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <nav className="nav-list">
                            <ul>
                                <li><a href="http://localhost:3000/home">Home</a></li>
                                <li><a href="http://localhost:3000/plan">Plan</a></li>
                                <li><a href="http://localhost:3000/companyprofile">Company Profile</a></li>
                                <li><a href="http://localhost:3000/contact">Contact Us</a></li>
                                <li className="nav-login"><a href="http://localhost:3000">login</a></li>

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
                    <div className="main-logo mob-first">
                    <a href='#'><img src={logonew} /></a>
                            </div>
                    </div>
                    <div className="col-md-6">
                    <div className="mobile-nav" id="nav">
                    <a href="#">
                        <div className="mob-nav-logo ptpx-15 pbpx-15 plpx-30">
                        <div className="main-logo">
                        <a href='#'><img src={logonew} /></a>
                            </div>
                        </div>
                    </a>
                    <nav>
                        <div className="mob-nav-list">
                        <ul>
                        <li className='mobile-form'>
                            <form action="javascript:void(0)" method="get">
                                <div className="input-group">
                                <div className="input-group-addon" id="order">
                                    <div className="select-style">
                                        <select name="order">
                                        <option value="" disabled>Select Your Type</option>
                                        <option value="a" selected>A</option>
                                        <option value="b">B</option>
                                        </select>
                                    </div>
                                    </div>
                                    <input type="text" name="search" id="search" className="form-control" placeholder="Search For ..." autocomplete="off" />
                                    <div className="input-group-addon" id="sub">
                                    <button className="submit" type="submit">
                                        <span className="fa fa-search"></span>
                                    </button>
                                    </div>
                                </div>
                                </form>
                            </li>
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
                <div className="mobile-nav-btn">
                    <span className="lines"></span>
                </div>
                    </div>
                    </div>
                </div>
                </div>

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
                                    <p className="ff-primary">This privacy policy applies between you, the User of this Website and Social
                                         avocadoo Limited, the owner and provider of this Website. Social avocadoo Limited takes
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
                                        <li>This privacy policy applies only to the actions of Social avocadoo Limited and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.</li>
                                        <li>For purposes of the applicable Data Protection Laws, Social avocadoo Limited is the "data controller". This means that Social avocadoo Limited determines the purposes for which, and the manner in which, your Data is processed.</li>
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
                                        <li>Social avocadoo Limited will collect your Data in a number of ways, for example:
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



export default connect(mapStateToProps, mapDispatchToProps)(Privacy)