import React from 'react';
import './Login.css'
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Upload, notification } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios';
import validator from 'validator'
import { connect } from 'react-redux';
import { loginUser } from '../../Redux/actions/authActions'
import SessionStorageManager from '../../Config/SessionStorageManager';
import logonew from '../../assets/img/new-logo.png';

const title = "Error"
const desc = 'Please Enter Correct UserName, Email and Password!'



class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      disable: false,
      disableUpload: false
    }
  }

  openNotification = (title, desc, icon, color = '#108ee9') => {
    notification.open({
      message: title,
      description: desc,
      icon: <Icon type={icon} style={{ color: color }} />,
    });
  };

  normFile = e => {
    this.setState({ disableUpload: false })
    if (e.file.type.indexOf('image')) {
      this.openNotification(title, 'Please Upload an Image', 'close-circle', 'red')
      return
    }
    if (Array.isArray(e)) {
      return e;
    }
    if (e.fileList.length) {
      this.setState({ disableUpload: true })
    }
    return e && e.fileList;
  }

  componentDidMount() {
    const user = SessionStorageManager.getUser();

    if (user) {
      this.props.history.push('/dashboard')
    }
  }


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (!validator.isEmail(values.email)) {
          return this.openNotification("Email", "Invalid Email", 'close-circle', 'red')
        }
        else if (values.password.length < 6) {
          return this.openNotification("Password", "Password must be Atleast 6 Digits", 'close-circle', 'red')
        }
        this.setState({ disable: true })
        console.log('Received values of form: ', values);
        var formData = new FormData();
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('upload', values.upload[0].originFileObj)
        axios.post('https://cmsbackend123.herokuapp.com/login/signup', formData)
          .then((result) => {
            console.log(result)
            if (result.data.success) {
              this.openNotification('Wellcome', result.data.message, 'check')
              this.props.loginUser(true)
              SessionStorageManager.setUser(result.data)
              window.location.reload()
              this.props.history.push('/dashboard')
            }
            else {
              this.openNotification(title, result.message, 'close-circle', 'red')
              this.setState({ disable: false })
            }
          })
        // this.setState({ email: values.email, userName: values.user })
      }
      else {
        this.openNotification(title, desc, 'close-circle', 'red')
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="register-body">

        
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


      

        <div className="register-card">
        <div className="card">
          <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <h1 className="ff-secondary fc-blue" style={{ textAlign: 'center' }} >Register</h1>
              <Form.Item className="sign-up">
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item className="sign-up">
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your Email!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="email"
                    placeholder="Email"
                  />,
                )}
              </Form.Item>
              <Form.Item className="sign-up">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item className="sign-up">
                {getFieldDecorator('upload', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload name="logo" accept="image/*" disabled={this.state.disable}>
                    <Button disabled={this.state.disableUpload}>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>,
                )}
              </Form.Item>

              <Form.Item className="sign-up">
                <Button htmlType="submit" className="login-form-button" disabled={this.state.disable} style={{ backgroundColor: '#37A000', color: 'white', fontWeight: 'bold', fontSize: 14, height: 40 }}>
                  Sign Up
          </Button>
                Or <Link to="/">Login With An Existing Account</Link>
              </Form.Item>
              <div className="signup-with">
                  <div className="signup-info">
                    <p className="ff-primary">Or Sign Up with gmail !</p></div>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
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



const SignupComp = Form.create({ name: 'normal_login' })(Signup);


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

export default connect(mapStateToProps, mapDispatchToProps)(SignupComp);