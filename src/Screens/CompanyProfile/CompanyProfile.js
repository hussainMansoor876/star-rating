import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './CompanyProfile.css'
import proven from '../../assets/img/user.png';
import manicon from '../../assets/img/man-icon-2.png';
import Header from '../Header/Header'
import Footer from '../Header/Footer'
import axios from 'axios'
import Exception from 'ant-design-pro/lib/Exception';
import { Form } from 'antd';
import Review from '../Review/Review'
import { Rate } from 'antd';
import { Player } from 'video-react';

const reviewDesc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

class Company extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			company: '',
			success: true,
			visible: false,
			starValues: {
				totalStars: 0,
				applicationStars: 0,
				featuresStars: 0,
				clarityStars: 0,
				privacyStars: 0,
				customerService: 0
			}
		}
	}

	handleCancel = () => {
		this.setState({ visible: false });
	};

	async handleCreate(values) {
		const { user } = this.props
		const { company } = this.state
		if (!values.video) {
			delete values.video
		}
		values.companyName = company.name
		values.companyId = company._id
		values.ownerId = company.user._id
		values.ownerName = company.user.name
		values.reveiwerName = user.name
		values.reveiwerId = user._id
		var formData = new FormData();
		for (var i in values) {
			formData.append(i, values[i])
		}
		formData.append('video', values.video[0].originFileObj)
		await axios.post('https://star-rating123.herokuapp.com/post/add-review', formData)
			.then((response) => {
				const { data } = response
				this.handleCancel()
				if (data.success) {
					this.props.loginUser(data.data)
					setTimeout(() => {
						window.location.reload()
					})
				}
			})

	};

	async componentWillMount() {
		await axios.post('https://star-rating123.herokuapp.com/post/search-company', {
			_id: this.props.match.params.id
		})
			.then((response) => {
				console.log(response)
				var { data } = response
				if (data.data && data.data.reviews) {
					data.data.reviews = data.data.reviews.reverse()
				}
				this.setState({
					company: data.data,
					success: data.success
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
			})
	}


	render() {
		const { company, success, starValues } = this.state
		const { user } = this.props
		if (!company) {
			return (
				<div className="main-body">
					<Header {...this.props} />
					{!success && <Exception type="404" style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }} desc="User profile Not Found!!!" />}
				</div>
			)
		}
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
															<Rate disabled defaultValue={starValues.totalStars} style={{ color: '#0c94ac' }} />
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
																				<Rate disabled defaultValue={starValues.totalStars} style={{ color: '#0c94ac' }} />
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
																				<Rate disabled defaultValue={starValues.applicationStars} style={{ color: '#0c94ac' }} />
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
																				<Rate disabled defaultValue={starValues.featuresStars} style={{ color: '#0c94ac' }} />
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
																				<Rate disabled defaultValue={starValues.clarityStars} style={{ color: '#0c94ac' }} />
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
																				<Rate disabled defaultValue={starValues.privacyStars} style={{ color: '#0c94ac' }} />
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
																				<Rate disabled defaultValue={starValues.customerService} style={{ color: '#0c94ac' }} />
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
														{!user.buyPlan ? <div className="inputcol-2">
															<a href="/createcompany" className="btn-blue ff-primary">Register Your Company</a>
														</div> : null}
														{company.ownerId !== user._id ? <div className="inputcol-2">
															<button className="btn-blue ff-primary" style={{ width: '100%' }} onClick={() => this.setState({ visible: true })}>Add Review</button>
														</div> : null}
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
											<Rate disabled defaultValue={starValues.totalStars} style={{ color: '#0c94ac' }} />
										</div>
										<span className="ant-rate-text">{reviewDesc[parseInt(starValues.totalStars) - 1]}</span>
									</div>
								</div> : null}
							</div>
						</div>
					</div>
				</section>

				{company.reviews ? <section id="customer-service">
					{company.reviews.map((v, i) => {
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
				</section> : null}
				<Review
					visible={this.state.visible}
					onCancel={this.handleCancel}
					openNotification={this.openNotification}
					handleCreate={this.handleCreate.bind(this)}
				/>
				<Footer {...this.props} />
			</div>
		)
	}
}


const CompanyForm = Form.create({ name: 'Company' })(Company);



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



export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm)