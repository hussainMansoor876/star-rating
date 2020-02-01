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

class Reviewer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			user: '',
			success: true
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
		if (!user) {
			this.props.history.replace('/login')
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
									<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-xing-square"></i></a></li>
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
													<span className="ff-primary">4.66/5.00</span>
													<div className="starr">
														<ul>
															<li><i className="fa fa-star"></i></li>
															<li><i className="fa fa-star"></i></li>
															<li><i className="fa fa-star"></i></li>
															<li><i className="fa fa-star"></i></li>
															<li><i className="fa fa-star"></i></li>
														</ul>
													</div>
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
																	<h6 className="ff-secondary">3.853 Bewertungen</h6>
																	<div className="pproven-bottom-last">
																		<span className="line-top"></span>
																		<span className="lie-botm"></span>
																		<a className="a-tg-h ff-primary" href="#"><span>637</span>
																			Reviews <br></br> </a>
																		<a className="a-tg-h ff-primary" href="#"><span>4</span>
																			other sources</a>
																	</div>
																</div>

															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-5 flrt-r">
													<div className="center-second">
														<div className="center-second-main">
															{/* <p className="ff-primary">Bewertungen vom 14.12.2019 </p> */}
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

				<section id="reviews">
					<div className="wrapper">
						<div className="reviews-main">
							<div className="row">
								<div className="col-lg-8 col-md-8 col-sm-12">
									<div className="reviews-head">
										<h5 className="fc-blue">3,218 Reviews on Star Rating</h5>
									</div>
								</div>
								<div className="stars1 col-sm-12" style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', width: '100%' }}>
									<div className="star-center">
										<span className="ff-primary">4.66/5.00</span>
										<div className="starress">
											<ul>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
											</ul>
										</div>
										<span className="ff-primary">EXCELLENT</span>
									</div>
								</div>
								{/* <div className="col-lg-2 col-md-12">
									<div className="inputcol">
										<select>
											<option value="volvo">Volvo</option>
											<option value="saab">Saab</option>
											<option value="mercedes">Mercedes</option>
											<option value="audi">Audi</option>
										</select>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</section>

				<section id="customer-service">
					<div className="wrapper">
						<div className="customer-service-main">
							<div className="row">
								<div className="col-lg-2">
									<div className="two-str-main-dv">
										<div className="two-star">
											<span className="ff-primary">4.66/5.00</span>
											<div className="starress">
												<ul>
													<li><i className="fa fa-star"></i></li>
													<li><i className="fa fa-star"></i></li>
													<li><i className="fa fa-star"></i></li>
													<li><i className="fa fa-star"></i></li>
													<li><i className="fa fa-star"></i></li>
												</ul>
											</div>
											<span className="ff-primary">EXCELLENT</span>
										</div>
										<div className="two-icon">
											<img src={manicon} />
											<h5>Recommendation</h5>
										</div>
									</div>
								</div>
								<div className="col-lg-10">
									<div className="two-main-r">
										<div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', width: '100%', marginRight: 20 }}>
											<button className="btn btn-primary" style={{ maxWidth: '120px', width: '120px' }}>Edit</button>
										</div>
										<div className="two-r-main clearfix">
											<p className="ff-primary coment">
												I think the rating system is quite good. However, I would like that the sub-points of what should be evaluated and put in. I think the evaluation system is quite good. However, I would like that the sub-points of what should be evaluated and put in. I think the evaluation system is quite good. However, I would hope that the sub-items of what should be evaluated can and do.</p>
										</div>
										{/* <div className="two-d-main clearfix">
											<div className="col-lg-12">
												<div className="prove-centre">
													<p className="ff-primary">Customer review & rating for:</p>
													<span className="ff-primary">ProvenExpert</span>

													<div id="accordion" role="tablist">

														<div className="card-1">
															<div className="card-header-1" role="tab" id="headingTwo">
																<h5 className="mb-0">


																	<i className="fa fa-chevron-circle-down fc-blue collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></i>
																</h5>
															</div>
															<div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
																<div className="card-body ff-primary">
																	<div className="row">
																		<div className="col-lg-12 col-md-12 col-sm-12 flrt-r">
																			<div className="star-rating-second">
																				<div className="star-third">
																					<div className="row">
																						<div className="col-lg-8 col-md-8 col-sm-6 col-8">
																							<p className="ff-primary txt-align">Possible applications</p>
																						</div>
																						<div className="col-lg-4 col-md-4 col-sm-6 col-4">
																							<div className="starrsd">
																								<ul>
																									<li><i className="fa fa-star"></i></li>
																									<li><i className="fa fa-star"></i></li>
																									<li><i className="fa fa-star"></i></li>
																									<li><i className="fa fa-star"></i></li>
																									<li><i className="fa fa-star"></i></li>
																								</ul>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="star-third">
																					<div className="row">
																						<div className="col-lg-8 col-md-8 col-sm-6 col-8">
																							<p className="ff-primary txt-align">Possible applications</p>
																						</div>
																						<div className="col-lg-4 col-md-4 col-sm-6 col-4">
																							<div className="starrsd">
																								<ul>
																									<li><i className="fa fa-star"></i></li>
																									<li><i className="fa fa-star"></i></li>
																									<li><i className="fa fa-star"></i></li>
																									<li><i className="fa fa-star"></i></li>
																									<li><i className="fa fa-star"></i></li>
																								</ul>
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
											</div>

										</div> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
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