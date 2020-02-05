import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Profile.css'
import businesss from '../../assets/img/businesss.jpg';
import manicon from '../../assets/img/man-icon-2.png';
import logonew from '../../assets/img/new-logo.png';
import Header from '../Header/Header'
import Footer from '../Header/Footer'
import { Skeleton } from 'antd';
import axios from 'axios'
import Exception from 'ant-design-pro/lib/Exception';
import { Rate } from 'antd';
import { Player } from 'video-react';

const reviewDesc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

class Reviewer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			user: '',
			success: true,
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

	// async componentWillMount() {
	// 	await axios.post('https://star-rating123.herokuapp.com/post/search-profile', {
	// 		_id: this.props.match.params.id
	// 	})
	// 		.then((response) => {
	// 			console.log('response', response)
	// 			const { data } = response
	// 			this.setState({
	// 				user: data.data,
	// 				success: data.success
	// 			})
	// 		})
	// }

	componentDidMount() {
		const { user } = this.props
		var { starValues } = this.state
		if (!user) {
			this.props.history.replace('/login')
		}
		if (user.reviews) {
			for (var v of user.reviews) {
				var count = (v.applicationStars + v.featuresStars + v.clarityStars + v.privacyStars + v.customerService) / 5
				starValues.totalStars += count
				starValues.applicationStars += v.applicationStars
				starValues.featuresStars += v.featuresStars
				starValues.clarityStars += v.clarityStars
				starValues.privacyStars += v.privacyStars
				starValues.customerService += v.privacyStars
			}
			starValues.totalStars = starValues.totalStars / user.reviews.length
			starValues.applicationStars = starValues.applicationStars / user.reviews.length
			starValues.featuresStars = starValues.featuresStars / user.reviews.length
			starValues.clarityStars = starValues.clarityStars / user.reviews.length
			starValues.privacyStars = starValues.privacyStars / user.reviews.length
			starValues.customerService = starValues.customerService / user.reviews.length
			this.setState({
				starValues: starValues
			})
		}
	}


	render() {
		const { user } = this.props
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
													<img src={user.profilePic.url} />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="proven-botm">
													<h4 className="ff-secondary">{user.name}</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-10">
									<div className="exp-main">
										<div className="exp-con">
											<h3 className="ff-secondary">{user.name.toUpperCase()}</h3>

										</div>


										<div className="col-lg-12 clearfix">
											<div className="center-proven clearfix">
												<div className="col-lg-7 flrt-r">
													<div className="center-first">
														<div className="col-lg-12">
														</div>
														<div className="col-lg-6 col-md-6 flrt-r">
															<div className="centr-sub-1">
																<div className="centr-sub-1-main">
																	<h5 className="ff-secondary">Contact information</h5>
																	<span className="ff-primary">{user.email}</span>
																	{user.reviews ? <div className="pproven-bottom-last">
																		<span className="line-top"></span>
																		<span className="lie-botm"></span>
																		<a className="a-tg-h ff-primary" href="javascript:void(0)"><span>{user.reviews.length} Reviews</span>
																		</a>
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
							</div>
						</div>
					</div>
				</section>

				{user.reviews ? <section id="reviews">
					<div className="wrapper">
						<div className="reviews-main">
							<div className="row">
								<div className="col-lg-8 col-md-8 col-sm-12">
									<div className="reviews-head" style={{
										marginTop: 25
									}}>
										<h5 className="fc-blue">Your Reviews</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> : null}

				{user.reviews ? <section id="customer-service">
					{user.reviews.map((v, i) => {
						var count = (v.applicationStars + v.featuresStars + v.clarityStars + v.privacyStars + v.customerService) / 5
						return (
							<div className="wrapper" key={i}>
								<div className="customer-service-main">
									{user && user._id === v.reveiwerId ? <div className="inputcol-2 edit1">
										<button className="btn-blue ff-primary" style={{ width: '120px' }}>Edit</button>
									</div> : null}
									<div className="row">
										<div className="col-lg-3 col-md-4">
											<div className="two-str-main-dv">
												<div className="two-star">
													<span className="ff-primary">{count}/5.00</span>
													<div className="starress">
														<Rate disabled defaultValue={Math.round(count)} style={{ color: '#0c94ac' }} />
													</div>
													<span className="ant-rate-text">{reviewDesc[Math.round(count) - 1]}</span>
												</div>
												<div className="two-icon">
													<img src={manicon} />
													<h5>Recommendation</h5>
												</div>
											</div>
										</div>
										<div className="col-lg-9 col-md-8">
											<div className="two-main-r">
												<div className="two-r-main clearfix">
													<h3 className="ff-secondary">To: {v.companyName}</h3>
													<p className="ff-primary coment">You: {v.feedback}</p>

													<div className="col-lg-5 col-md-6 col-sm-12 flrt-r">
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
													{v.video ? <div className="col-lg-3 col-md-6 col-sm-12 flrt-r">
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
				<Footer {...this.props} />
			</div>
		)
	}
}



const mapStateToProps = (state) => {
	// console.log("mapToState", state.authReducer)
	return {
		user: state.authReducer.user,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (user) => dispatch(loginUser(user)),
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Reviewer)