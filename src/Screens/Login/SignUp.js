import React from 'react';
import './Login.css'
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Upload, notification } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios';
import validator from 'validator'
import { connect } from 'react-redux';
import { loginUser } from '../../Redux/actions/authActions'
import Header from '../Header/Header'
import Footer from '../Header/Footer'

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
    const { user } = this.props
    if (user) {
      this.props.history.push('/')
    }
  }


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values.upload)
        if (values.name.length < 4) {
          return this.openNotification("Name", "Name must be Atleast 4 Digits", 'close-circle', 'red')
        }
        else if (!validator.isEmail(values.email)) {
          return this.openNotification("Email", "Invalid Email", 'close-circle', 'red')
        }
        else if (values.password.length < 6) {
          return this.openNotification("Password", "Password must be Atleast 6 Digits", 'close-circle', 'red')
        }
        else if (values.password !== values.repassword) {
          return this.openNotification("Password", "Password Did not match", 'close-circle', 'red')
        }
        else if (!values.upload) {
          return this.openNotification("Picture", "Please Upload the picture", 'close-circle', 'red')
        }
        // this.setState({ disable: true })
        var formData = new FormData();
        formData.append('name', values.name)
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('upload', values.upload[0].originFileObj)
        axios.post('https://star-rating123.herokuapp.com/user/signup', formData)
          .then((result) => {
            console.log(result)
            if (result.data.success) {
              this.openNotification('Wellcome', result.data.message, 'check')
              this.props.loginUser(result.data.user)
              // SessionStorageManager.setUser(result.data)
              // window.location.reload()
              this.props.history.push('/')
            }
            else {
              this.openNotification(title, result.data.message, 'close-circle', 'red')
              this.setState({ disable: false })
            }
          })
        this.setState({ email: values.email, userName: values.user })
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
        <Header {...this.props} />
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
                      name="name"
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
                      name="email"
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
                      name="password"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />,
                  )}
                </Form.Item>
                <Form.Item className="sign-up">
                  {getFieldDecorator('repassword', {
                    rules: [{ required: true, message: 'Please input your Password Again!' }],
                  })(
                    <Input
                      name="repassword"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Re-Enter Password"
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
                        <Icon type="upload" /> Click to upload Image
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
        <Footer {...this.props} />
      </div>
    );
  }
}



const SignupComp = Form.create({ name: 'normal_login' })(Signup);


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

export default connect(mapStateToProps, mapDispatchToProps)(SignupComp);