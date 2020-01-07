/*eslint-disable*/

import React from 'react';
import './Login.css'
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import { Link } from 'react-router-dom'
import validator from 'validator'
import { connect } from 'react-redux';
import { loginUser } from '../../Redux/actions/authActions'
import SessionStorageManager from '../../Config/SessionStorageManager';
import logonew from '../../assets/img/new-logo.png';
import axios from 'axios'

const title = "Error"
const desc = 'Please Enter Email and Password!'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      disable: false,
      loggedIn: false,
      loading: false,
      errorMessage: "",
      successMessage: ""

    }
  }

  static getDerivedStateFromProps = (props, state) => {

    if (!props.currentUser && props.isError) {
      return {
        loading: false,
        errorMessage: props.errorMessage,
      }
    }

    return {
      successMessage: props.successMessage,
      loading: false,
      loggedIn: true,
    }

  }

  componentDidMount() {
    const { user } = this.props;
    console.log('user', user)

    if (user) {
      this.props.history.push('/')
    }
  }


  componentDidUpdate(prevProps, prevState) {

    if (prevProps.isError !== this.props.isError) {
      if (this.props.isError && !this.props.isLoggedIn) {
        this.setState({ disable: false })
        return this.openNotification("Problem", this.props.errorMessage, 'close-circle', 'red')
      }
    }

    if (!this.props.isError && this.props.currentUser) {
      this.props.history.push('/dashboard')
    }

  }



  openNotification = (title, desc, icon, color = '#108ee9') => {
    notification.open({
      message: title,
      description: desc,
      icon: <Icon type={icon} style={{ color: color }} />,
    });
  };


  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {

      if (!validator.isEmail(values.email)) {
        return this.openNotification("Email", "Invalid Email", 'close-circle', 'red')
      }
      else if (values.password.length < 6) {
        return this.openNotification("Password", "Password must be Atleast 6 Digits", 'close-circle', 'red')
      }

      this.setState({ loading: true, disable: true })
      axios.post('https://star-rating123.herokuapp.com/user/login', values)
        .then((result) => {
          if (result.data.success) {
            this.openNotification('Wellcome', 'Successfully Login!!!', 'check')
            this.props.loginUser(result.data.user)
            this.props.history.push('/')
          }
          else {
            this.setState({ loading: false, disable: false })
            this.openNotification(title, result.data.message, 'close-circle', 'red')
            // this.setState({ disable: false })
          }
        })

    });

  };



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-body">
        <header>
          <div className="wrapper">
            <div className="row">
              <div className="col-md-3">
                <div className="main-logo">
                  <a href='#'><img src={logonew} /></a>
                  {/* <form action="javascript:void(0)" method="get">
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
                  </form> */}
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
                    <li className="nav-login"><a href="http://localhost:3000/register">Signup</a></li>

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
                          <form>
                            <div className="input-group">
                              <div className="input-group-addon" id="order">
                                <div className="select-style">
                                  <select name="order">
                                    <option value="" disabled>Select Your Type</option>
                                    <option defaultValue="a">A</option>
                                    <option value="b">B</option>
                                  </select>
                                </div>
                              </div>
                              <input type="text" name="search" id="search" className="form-control" placeholder="Search For ..." autoComplete="off" />
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





        <div className="login-card">
          <div className="card">
            <div className="wrapper">
              <Form onSubmit={this.handleSubmit} className="login-form">
                <h1 className="fc-blue ff-secondary" style={{ textAlign: 'center' }}>Login</h1>
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email!' }],
                  })(
                    <Input
                      name="email"
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Email"
                      type="email"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      name="password"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(<Checkbox>Remember me</Checkbox>)}
                  <a className="login-form-forgot" href="">
                    Forgot password
          </a>
                  <Button disabled={this.state.disable} loading={this.state.loading} htmlType="submit" className="login-form-button" style={{ backgroundColor: '#37A000', color: 'white', fontWeight: 'bold', fontSize: 14, height: 40 }}>
                    Log in
          </Button>
                  Or <Link to="/register">Register Now!</Link>
                </Form.Item>
                <div className="signup-with">
                  <div className="signup-info">
                    <p className="ff-primary">Or Register with !</p></div>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-instagram"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
              </Form>

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
      </div>
    );
  }
}


const LoginComp = Form.create({ name: 'normal_login' })(Login);


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


export default connect(mapStateToProps, mapDispatchToProps)(LoginComp)
