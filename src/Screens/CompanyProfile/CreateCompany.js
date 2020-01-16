import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './CompanyProfile.css'
import Header from '../Header/Header'
import axios from 'axios'
import validator from 'validator'
import { Form, Icon, Input, Button, Upload, notification, Select } from 'antd';
import { Link } from 'react-router-dom'
import Footer from '../Header/Footer'
import data from '../../country'

const { Option } = Select;


const title = "Error"

const { TextArea } = Input;

class CreateCompany extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			city: []
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
			if (!err) {
				if (values.name.length <= 3) {
					return this.openNotification("Problem", "Name Must be ATleast 4 characters", 'close-circle', 'red')
				}
				else if (!validator.isURL(values.url)) {
					return this.openNotification("Email", "Invalid Url", 'close-circle', 'red')
				}
				else if (values.telnumber.length < 10) {
					return this.openNotification("Problem", "Telephone Number be Atleast 10 Numbers", 'close-circle', 'red')
				}
				else if (values.contactNo.length < 10) {
					return this.openNotification("Problem", "Contact Number be Atleast 10 Numbers", 'close-circle', 'red')
				}
				else if (!validator.isEmail(values.contactEmail)) {
					return this.openNotification("Email", "Invalid Email", 'close-circle', 'red')
				}
				else if (values.address.length < 10) {
					return this.openNotification("Problem", "Address Must be Atleast 10 Numbers", 'close-circle', 'red')
				}
				else if (values.address.country < 10) {
					return this.openNotification("Problem", "Please Select a Country", 'close-circle', 'red')
				}
				else if (values.address.city < 10) {
					return this.openNotification("Problem", "Please Select a City", 'close-circle', 'red')
				}
				else if (!values.profilePic) {
					return this.openNotification("Picture", "Please Upload the picture", 'close-circle', 'red')
				}
				else if (values.description.length < 10) {
					return this.openNotification("Problem", "Descrription Must be Atleast 10 Numbers", 'close-circle', 'red')
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
			}

		});

	};


	render() {
		const { getFieldDecorator } = this.props.form;
		const { city } = this.state
		return (
			<div className="main-body">
				<Header {...this.props} />

				<section id="banner-6">
					<div className="wrapper">
						<div className="d-table w-100">
							<div className="d-table-cell va-middle">
								<div className="banner-content">
									<h2 className="ff-secondary">Register Your Company</h2>
									<p className="ff-primary fc-white">The free version of ProvenExpert is — and always will be — free.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="create-card">
					<div className="wrapper">
						<div className="card">
							<div>
								<Form onSubmit={this.handleSubmit} className="login-form">
									<h1 className="ff-secondary fc-blue" style={{ textAlign: 'center' }} >Company Registration Form</h1>
									<div class="row">
										<div class="col-md-6 col-sm-6 col-xs-12">
											<label>Company Name:</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('name', {
													rules: [{ required: true, message: 'Please input your Company Name!' }],
												})(
													<Input
														name="name"
														prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
														placeholder="Company Name"
													/>,
												)}
											</Form.Item>
										</div>
										<div class="col-md-6 col-sm-6 col-xs-12">
											<label>Company Url:</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('url', {
													rules: [{ required: true, message: 'Please input your Company Url!' }],
												})(
													<Input
														name="name"
														prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
														placeholder="example.com"
													/>,
												)}
											</Form.Item>
										</div>
										<div className="col-md-6 col-sm-6 col-xs-12">
											<label>Telephone Number:</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('telnumber', {
													rules: [{ required: true, message: 'Please input your Tel Number!' }],
												})(

													<Input
														type="phone"
														name="phone"
														prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
														placeholder="Telephone No"
													/>,
												)}
											</Form.Item>
										</div>
										<div class="col-md-6 col-sm-6 col-xs-12">
											<label>Mobile Number:</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('contactNo', {
													rules: [{ required: true, message: 'Please input your Mob Number!' }],
												})(
													<Input
														type="phone"
														name="phone"
														prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
														placeholder="Mobile No"
													/>,
												)}
											</Form.Item>
										</div>
										<div className="col-md-6 col-sm-6 col-xs-12">
											<label>Email:</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('contactEmail', {
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
										</div>

										<div className="col-md-6 col-sm-6 col-xs-12">
											<label>Address:</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('address', {
													rules: [{ required: true, message: 'Please input your Address!' }],
												})(
													<Input
														type="name"
														name="name"
														prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
														placeholder="Address"
													/>,
												)}
											</Form.Item>

										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
											<label>Country:</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('country', {
													rules: [{ required: true, message: 'Please Select Your Country!' }],
												})(
													<Select
														showSearch
														// style={{ width: 200 }}
														style={{ backgroundColor: '#fff' }}
														placeholder="Select a Country"
														optionFilterProp="children"
														onSelect={(e) => this.setState({city: data[e]})}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														{
															Object.keys(data).map((v, i) => {
																return <Option value={v} key={i}>{v}</Option>
															})
														}
													</Select>,
												)}
											</Form.Item>

										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
											<label>City:</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('city', {
													rules: [{ required: true, message: 'Please Select Your City!' }],
												})(
													<Select
														// showSearch
														style={{ backgroundColor: '#fff' }}
														placeholder="Select a city"
														// disabled={true}
														optionFilterProp="children"
														onSelect={(e) => console.log(e)}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														{
															city.map((v, i) => {
																return <Option city={v} key={i}>{v}</Option>
															})
														}
													</Select>,
												)}
											</Form.Item>

										</div>
										<div className="col-md-12">
											<label>Upload Your Logo</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('profilePic', {
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
										</div>
										<div className="col-md-12">
											<label>Description:</label>
											<Form.Item className="sign-up">
												{getFieldDecorator('description', {
													rules: [{ required: true, message: 'Please input your Description!' }],
												})(
													<TextArea
														placeholder="Description"
													/>
												)}
											</Form.Item>
										</div>

										<div className="col-md-12">
											<div className="register-btn">
												<Form.Item className="sign-up">
													<Button htmlType="submit" className="login-form-button" style={{ backgroundColor: '#37A000', color: 'white', fontWeight: 'bold', fontSize: 14, height: 40 }}>
														Register
												</Button>
												</Form.Item>
											</div>
										</div>
									</div>


								</Form>
							</div>
						</div>
					</div>
				</div>
				<Footer {...this.props} />
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