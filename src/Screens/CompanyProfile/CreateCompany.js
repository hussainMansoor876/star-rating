import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './CompanyProfile.css'
import Header from '../Header/Header'
import axios from 'axios'
import validator from 'validator'
import { Form, Icon, Input, Button, Upload, notification } from 'antd';
import { Link } from 'react-router-dom'

const title = "Error"

class CreateCompany extends React.Component {

	constructor(props) {
		super(props)
		this.state = {

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
			<div className="main-body">
				<Header {...this.props} />
				<section id="inside-banner">
					<div className="wrapper">
						<div className="inside-banner-image">
							<div className="inside-content">
								<button className="btn-blue ff-primary"><i className="fa fa-phone"></i> Callback request</button>
								<button className="btn-blue ff-primary"><i className="fa fa-envelope"></i> Write a message</button>
							</div>
							<div className="social-icons">
								<ul>
									<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-xing-square"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</section>
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
		)
	}
}

const CreateCompanyComp = Form.create({ name: 'normal_login' })(CreateCompany);



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



export default connect(mapStateToProps, mapDispatchToProps)(CreateCompanyComp)