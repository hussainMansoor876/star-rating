import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './CompanyProfile.css'
import Header from '../Header/Header'
import axios from 'axios'
import validator from 'validator'
import { Form, Icon, Input, Button, Upload, notification, Select, message } from 'antd';
import { Link } from 'react-router-dom'
import Footer from '../Header/Footer'
import data from '../../country'
import Plan from '../Plan/Plan'
import Exception from 'ant-design-pro/lib/Exception';
import manicon from '../../assets/img/man-icon-2.png';
import { Rate, Pagination } from 'antd';
import { Player } from 'video-react';

const reviewDesc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];
const { Option } = Select;


const title = "Error"

const { TextArea } = Input;

const props = {
	name: 'file',
	multiple: true,
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	onChange(info) {
		const { status } = info.file;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}
		if (status === 'done') {
			message.success(`${info.file.name} file uploaded successfully.`);
		} else if (status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}
	},
}

class CreateCompany extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			city: [],
			disableUpload: false,
			success: true,
			disable: false,
			loading: true,
			company: null,
			starValues: {
				totalStars: 0,
				applicationStars: 0,
				featuresStars: 0,
				clarityStars: 0,
				privacyStars: 0,
				customerService: 0
			},
			index: 0,
			currPage: 1
		}
	}

	openNotification = (title, desc, icon, color = '#108ee9') => {
		notification.open({
			message: title,
			description: desc,
			icon: <Icon type={icon} style={{ color: color }} />,
		});
	};

	updatePage(value) {
		const { currPage, index } = this.state
		if (value > currPage) {
			this.setState({
				currPage: value,
				index: index + 5
			})
		}
		else {
			this.setState({
				currPage: value,
				index: index - 5
			})
		}
	}

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


	handleSubmit = e => {
		const { city } = this.state
		const { user } = this.props
		e.preventDefault();

		this.props.form.validateFields((err, values) => {
			if (!err) {
				if (values.name.length <= 3) {
					return this.openNotification("Problem", "Name Must be ATleast 4 characters", 'close-circle', 'red')
				}
				else if (!validator.isURL(values.url)) {
					return this.openNotification("Problem", "Invalid Url", 'close-circle', 'red')
				}
				else if (values.telnumber.length < 8) {
					return this.openNotification("Problem", "Telephone Number be Atleast 8 Numbers", 'close-circle', 'red')
				}
				else if (values.contactNo.length < 10) {
					return this.openNotification("Problem", "Contact Number be Atleast 10 Numbers", 'close-circle', 'red')
				}
				else if (!validator.isEmail(values.contactEmail)) {
					return this.openNotification("Problem", "Invalid Email", 'close-circle', 'red')
				}
				else if (values.address.length < 10) {
					return this.openNotification("Problem", "Address Must be Atleast 10 Numbers", 'close-circle', 'red')
				}
				else if (!values.country) {
					return this.openNotification("Problem", "Please Select a Country", 'close-circle', 'red')
				}
				else if (!values.city) {
					return this.openNotification("Problem", "Please Select a City", 'close-circle', 'red')
				}
				else if (!values.profilePic) {
					return this.openNotification("Problem", "Please Upload the picture", 'close-circle', 'red')
				}
				else if (values.description.length < 10) {
					return this.openNotification("Problem", "Descrription Must be Atleast 10 Numbers", 'close-circle', 'red')
				}

				values.user = this.props.user
				this.setState({ disable: true })
				var formData = new FormData();
				formData.append('profilePic', values.profilePic[0].originFileObj)
				formData.append('name', values.name)
				formData.append('url', values.url)
				formData.append('telnumber', values.telnumber)
				formData.append('contactNo', values.contactNo)
				formData.append('contactEmail', values.contactEmail)
				formData.append('address', values.address)
				formData.append('country', values.country)
				formData.append('city', city[values.city])
				formData.append('description', values.description)
				formData.append('title', values.title)
				formData.append('user', JSON.stringify(user))


				axios.post('https://star-rating123.herokuapp.com/user/createCompany', formData)
					.then((result) => {
						if (result.data.success) {
							this.openNotification('Success', 'Successfully Created Company!!!', 'check')
							this.props.history.push('/profile')
						}
						else {
							this.setState({ disable: false })
							this.openNotification(title, result.data.message, 'close-circle', 'red')
						}
					})
			}

		});

	};

	async componentWillMount() {
		const { user } = this.props
		if (!user.buyPlan) {
			this.props.history.push('/plan')
		}
		else {
			await axios.post('https://star-rating123.herokuapp.com/post/is-company', {
				_id: user._id
			})
				.then((response) => {
					console.log('response', response)
					var { data } = response
					if (data.success) {
						if (data.data && data.data.reviews) {
							data.data.reviews = data.data.reviews.reverse()
						}
						this.setState({
							company: data.data,
							loading: false
						}, () => {
							var { company, starValues } = this.state
							if (company.reviews) {
								for (var v of company.reviews) {
									var count = (v.applicationStars + v.featuresStars + v.clarityStars + v.privacyStars + v.customerService) / 5
									starValues.totalStars += count
									starValues.applicationStars += v.applicationStars
									starValues.featuresStars += v.featuresStars
									starValues.clarityStars += v.clarityStars
									starValues.privacyStars += v.privacyStars
									starValues.customerService += v.privacyStars
								}
								starValues.totalStars = starValues.totalStars / company.reviews.length
								starValues.applicationStars = starValues.applicationStars / company.reviews.length
								starValues.featuresStars = starValues.featuresStars / company.reviews.length
								starValues.clarityStars = starValues.clarityStars / company.reviews.length
								starValues.privacyStars = starValues.privacyStars / company.reviews.length
								starValues.customerService = starValues.customerService / company.reviews.length
								this.setState({
									starValues: starValues
								})
							}
						})
					}
					else {
						this.setState({
							success: false,
							loading: false
						})
					}
				})
		}
	}


	render() {
		const { getFieldDecorator } = this.props.form;
		const { city, success, loading, company, starValues, index } = this.state
		const { user } = this.props
		if (loading) {
			return (
				<div className="main-body">
					<Header {...this.props} />
				</div>
			)
		}
		return (
			<div className="main-body">
				<Header {...this.props} />
				{user.buyPlan && !company ?
					<div>
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
											<div className="row">
												<div className="col-md-6 col-sm-6 col-xs-12">
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
												<div className="col-md-6 col-sm-6 col-xs-12">
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
												<div className="col-md-6 col-sm-6 col-xs-12">
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
															initialValue: this.props.user.email,
															rules: [{ required: true, message: 'Please input your Email!' }],
														})(
															<Input
																disabled
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
																onSelect={(e) => this.setState({ city: data[e] })}
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
																showSearch
																style={{ backgroundColor: '#fff' }}
																placeholder="Select a city"
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
												<div className="col-md-6 col-sm-6 col-xs-12">
													<label>Company Title:</label>
													<Form.Item className="sign-up">
														{getFieldDecorator('title', {
															rules: [{ required: true, message: 'Please input your Company Title!' }],
														})(
															<Input
																maxLength={60}
																name="title"
																prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
																placeholder="Company Title"
															/>,
														)}
													</Form.Item>
												</div>
												<div className="col-md-6 col-sm-6 col-xs-12">
													<label>Upload Your Picture</label>
													<Form.Item className="sign-up">
														{getFieldDecorator('profilePic', {
															valuePropName: 'fileList',
															getValueFromEvent: this.normFile,
														})(
															<Upload name="logo" accept="image/*" disabled={this.state.disable} {...props}>
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
															<Button htmlType="submit" className="login-form-button" disabled={this.state.disable} loading={this.state.disable} style={{ backgroundColor: '#37A000', color: 'white', fontWeight: 'bold', fontSize: 14, height: 40 }}>
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
					</div> : <div className="main-body">
						<section id="inside-banner">
							<div className="wrapper">
								<div className="inside-banner-image">
									<div className="inside-content">
										<button className="btn-blue ff-primary"><i className="fa fa-phone"></i> Callback request</button>
										<button className="btn-blue ff-primary"><i className="fa fa-envelope"></i> Write a message</button>
									</div>
									<div className="social-icons">
										<ul>
											<li><a href="javascript:void(0)"><i className="fa fa-facebook-f"></i></a></li>
											<li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
											<li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
											<li><a href="javascript:void(0)"><i className="fa fa-xing-square"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</section>


						<section id="expert">
							<div className="wrapper">
								<div className="expert-main">
									<div className="row">
										<div className="col-lg-2">
											<div className="exp-con-left">
												<div className="row">
													<div className="col-lg-12">
														<div className="proven-con">
															<img src={company.profilePic.url} alt="image" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="proven-botm">
															{starValues.totalStars ? <div>
																<span className="ff-primary">{starValues.totalStars}/5.00</span>
																<div className="starress">
																	<Rate disabled defaultValue={Math.round(starValues.totalStars)} style={{ color: '#0c94ac' }} />
																</div>
															</div> : null}
															<h4 className="ff-secondary">{company.name}</h4>
															<div className="pproven-bottom-last">
																<span className="line-top"></span>
																<span className="lie-botm"></span>
																{company.reviews ? <a className="a-tg-h ff-primary" href="javascript:void(0)"><span>{company.reviews.length}</span>
																	Reviews <br></br> </a> : null}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-10">
											<div className="exp-main">
												<div className="exp-con">
													<h3 className="ff-secondary">{company.url}</h3>
													<h4 className="ff-secondary">{company.title}</h4>
												</div>


												<div className="col-lg-12 clearfix">
													<div className="center-proven clearfix">
														<div className="col-lg-7 flrt-r">
															<div className="center-first">
																<div className="col-lg-12">
																	<div className="center-first-sub ">
																		<p className="ff-primary ideal" style={{
																			overflow: 'hidden'
																		}}>{company.description}</p>
																	</div>
																</div>
																<div className="col-lg-6 col-md-6 flrt-r">
																	<div className="centr-sub-1">
																		<div className="centr-sub-1-main">
																			<h5 className="ff-secondary">Contact information</h5>
																			<span className="ff-primary">{company.url}</span>
																			<span className="ff-primary">{company.address}</span>
																			<span className="ff-primary">{company.city}</span>
																			<span className="ff-primary">{company.country}</span>
																		</div>
																		<div className="centr-sub-2-main">
																			<h5 className="ff-secondary">Contact person</h5>
																			<ul>
																				<li className="ff-primary"><i className="fa fa-phone"></i><a href="javascript:void(0)" className="fc-blue">{company.contactNo}</a></li>
																				<li className="ff-primary"><a href="javascript:void(0)" className="fc-blue">{company.contactEmail}</a></li>
																			</ul>
																		</div>
																	</div>
																</div>
																<div className="col-lg-6 col-md-6 flrt-r">
																	<div className="centr-subs-2">
																		<h5 className="ff-secondary">Websites & Profiles</h5>
																		<p><i className="fa fa-window-maximize"></i><a className="ff-primary fc-blue" target="_blank" href={`https://${company.url}`}>{company.url}</a></p>
																		<div className="social-icons-proven">
																			<ul>
																				<li><a href="javascript:void(0)"><i className="fa fa-facebook-f"></i></a></li>
																				<li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
																				<li><a href="javascript:void(0)"><i className="fa fa-linkedin"></i></a></li>
																				<li><a href="javascript:void(0)"><i className="fa fa-xing-square"></i></a></li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-5 flrt-r">
															<div className="center-second">
																{starValues.totalStars ? <div className="center-second-main">
																	<div className="row">
																		<div className="col-lg-12 col-md-12">
																			<div className="for-main">
																				{starValues.totalStars ? <div>
																					<span className="ff-primary">{starValues.totalStars} von 5</span>
																					<div className="starress">
																						<Rate disabled defaultValue={Math.round(starValues.totalStars)} style={{ color: '#0c94ac' }} />
																					</div>
																				</div> : null}
																				<h4 className="ff-secondary">{company.name}</h4>
																			</div>
																		</div>
																	</div>
																	<div className="star-rating">
																		<div className="star-first">
																			<div className="row">
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<p className="ff-primary fc-blue"><a href="javascript:void(0)">Possible</a></p>
																				</div>
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<div className="starrs">
																						<Rate disabled defaultValue={Math.round(starValues.applicationStars)} style={{ color: '#0c94ac' }} />
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="star-first">
																			<div className="row">
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<p className="ff-primary fc-blue"><a href="javascript:void(0)">Features</a></p>
																				</div>
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<div className="starrs">
																						<Rate disabled defaultValue={Math.round(starValues.featuresStars)} style={{ color: '#0c94ac' }} />
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="star-first">
																			<div className="row">
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<p className="ff-primary fc-blue"><a href="javascript:void(0)">Clarity</a></p>
																				</div>
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<div className="starrs">
																						<Rate disabled defaultValue={Math.round(starValues.clarityStars)} style={{ color: '#0c94ac' }} />
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="star-first">
																			<div className="row">
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<p className="ff-primary fc-blue"><a href="javascript:void(0)">Privacy</a></p>
																				</div>
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<div className="starrs">
																						<Rate disabled defaultValue={Math.round(starValues.privacyStars)} style={{ color: '#0c94ac' }} />
																					</div>
																				</div>
																			</div>
																		</div>
																		<div className="star-first">
																			<div className="row">
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<p className="ff-primary fc-blue"><a href="javascript:void(0)">Customer Service</a></p>
																				</div>
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<div className="starrs">
																						<Rate disabled defaultValue={Math.round(starValues.customerService)} style={{ color: '#0c94ac' }} />
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div> : <div style={{
																	display: 'flex',
																	justifyContent: 'center',
																	alignItems: 'center'
																}}>
																		<h3>No Reviews</h3>
																	</div>}
															</div>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section id="reviews">
							<div className="wrapper">
								<div className="reviews-main">
									<div className="row">
										<div className="col-lg-8 col-md-8 col-sm-12">
											{company.reviews && company.reviews.length ? <div className="reviews-head" style={{
												marginTop: 25
											}}>
												<h5 className="fc-blue">{company.reviews.length} Reviews on star-rating.com</h5>
											</div> : null}
										</div>
										{starValues.totalStars ? <div className="stars1 col-sm-12" style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
											<div className="star-center">
												<span className="ff-primary">{starValues.totalStars}/5.00</span>
												<div className="starress">
													<Rate disabled defaultValue={Math.round(starValues.totalStars)} style={{ color: '#0c94ac' }} />
												</div>
												<span className="ant-rate-text">{reviewDesc[Math.round(starValues.totalStars) - 1]}</span>
											</div>
										</div> : null}
									</div>
								</div>
							</div>
						</section>

						{company.reviews ? <section id="customer-service">
							{company.reviews.slice(index, index + 5).map((v, i) => {
								var count = (v.applicationStars + v.featuresStars + v.clarityStars + v.privacyStars + v.customerService) / 5
								return (
									<div className="wrapper" key={i}>
										<div className="customer-service-main">
											{user && user._id === v.reveiwerId ? <div className="inputcol-2 edit1">
												<button className="btn-blue ff-primary" style={{ width: '120px' }}>Edit</button>
											</div> : null}
											<div className="row">
												<div className="col-lg-2 col-md-4">
													<div className="two-str-main-dv">
														<div className="two-star">
															<span className="ff-primary">{count}/5.00</span>
															<div className="starress">
																<Rate disabled defaultValue={Math.round(count)} allowHalf={true} style={{ color: '#0c94ac' }} />
															</div>
															<span className="ant-rate-text">{reviewDesc[Math.round(count) - 1]}</span>
														</div>
														<div className="two-icon">
															<img src={manicon} />
															<h5>Recommendation</h5>
														</div>
													</div>
												</div>
												<div className="col-lg-10 col-md-4">
													<div className="two-main-r">
														<div className="two-r-main clearfix">
															<h3 className="ff-secondary">{v.reveiwerName}</h3>
															<p className="ff-primary coment">{v.feedback}</p>

															<div className="col-lg-5 col-md-12 col-sm-12 flrt-r">
																<div className="star-rating-second">
																	<div className="star-third">
																		<div className="row">
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<p className="ff-primary">Possible</p>
																			</div>
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<div className="starrsd">
																					<Rate disabled defaultValue={v.applicationStars} style={{ color: '#0c94ac' }} />
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="star-third">
																		<div className="row">
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<p className="ff-primary">Features</p>
																			</div>
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<div className="starrsd">
																					<Rate disabled defaultValue={v.featuresStars} style={{ color: '#0c94ac' }} />
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="star-third">
																		<div className="row">
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<p className="ff-primary">Clarity</p>
																			</div>
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<div className="starrsd">
																					<Rate disabled defaultValue={v.clarityStars} style={{ color: '#0c94ac' }} />
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="star-third">
																		<div className="row">
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<p className="ff-primary">Privacy</p>
																			</div>
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<div className="starrsd">
																					<Rate disabled defaultValue={v.privacyStars} style={{ color: '#0c94ac' }} />
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="star-third">
																		<div className="row">
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<p className="ff-primary">Customer Service</p>
																			</div>
																			<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																				<div className="starrsd">
																					<Rate disabled defaultValue={v.customerService} style={{ color: '#0c94ac' }} />
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															{v.video ? <div className="col-lg-3 col-md-12 col-sm-12 flrt-r">
																<div className="mrtpt clearfix">
																	<Player>
																		<source src={v.video.url} />
																	</Player>
																</div>
															</div> : null}
														</div>
														<div className="two-d-main clearfix">
															<div className="col-lg-12">
																<div className="prove-centre">
																	<p className="ff-primary">Customer review & rating for:</p>
																	<span className="ff-primary">Star Rating</span>
																</div>
															</div>

														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								)
							})}
							<div style={{
								display: 'flex',
								justifyContent: 'flex-end',
								marginBottom: 50
							}}>
								<Pagination defaultCurrent={1} total={company.reviews.length} defaultPageSize={5} onChange={(value) => this.updatePage(value)} />
							</div>
						</section> : null}
						<Footer {...this.props} />
					</div>
				}
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