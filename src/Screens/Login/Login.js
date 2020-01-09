/*eslint-disable*/

import React from 'react';
import './Login.css'
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox, notification } from 'antd';
import { Link } from 'react-router-dom'
import validator from 'validator'
import { connect } from 'react-redux';
import { loginUser, removeUser } from '../../Redux/actions/authActions'
import Header from '../Header/Header'
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
    const { user, history } = this.props;
    console.log('user', this.props)
    if (history.location.state) {
      this.props.removeUser()
    }
    else if (user) {
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
      this.props.history.push('/')
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
        <Header {...this.props} />
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
    removeUser: () => dispatch(removeUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginComp)
