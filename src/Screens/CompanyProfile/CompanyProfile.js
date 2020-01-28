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


class Company extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			company: '',
			success: true
		}
	}

	async componentWillMount() {
		console.log('params', this.props.match.params.id)
		await axios.post('https://star-rating123.herokuapp.com/post/search-company', {
			_id: this.props.match.params.id
		})
			.then((response) => {
				const { data } = response
				this.setState({
					company: data.data,
					success: data.success
				})
			})
	}


	render() {
		const { company, success } = this.state
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
													<img src={proven} />
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
													<h4 className="ff-secondary">SEHR GUT</h4>
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
								<div className="col-lg-10">
									<div className="exp-main">
										<div className="exp-con">
											<h3 className="ff-secondary">ProvenExpert.com</h3>
											<h4 className="ff-secondary">Customer satisfaction analysis & referral marketing</h4>
										</div>


										<div className="col-lg-12 clearfix">
											<div className="center-proven clearfix">
												<div className="col-lg-7 flrt-r">
													<div className="center-first">
														<div className="col-lg-12">
															<div className="center-first-sub ">
																<p className="ff-primary ideal">The ideal solution for your referral marketing: For more confidence, customers & sales.</p>
																<p className="ff-primary">With ProvenExpert.com you get the feedback from your customers
											 and present your evaluations from all platforms in one single rating...</p>
																<a href="#">View full description <i className="fa fa-chevron-circle-down fc-blue"></i></a>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 flrt-r">
															<div className="centr-sub-1">
																<div className="centr-sub-1-main">
																	<h5 className="ff-secondary">Contact information</h5>
																	<span className="ff-primary">ProvenExpert.com</span>
																	<span className="ff-primary">Quedlinburger Straße 1</span>
																	<span className="ff-primary">10589 Berlin</span>
																	<span className="ff-primary">Germany</span>
																	<span className="ff-primary direction"><i className="fa fa-map-marker"></i><a href="#" className="fc-blue"> Direction</a></span>
																</div>
																<div className="centr-sub-2-main">
																	<h5 className="ff-secondary">Contact person</h5>
																	<span className="ff-primary">Remo Fyda</span>
																	<ul>
																		<li className="ff-primary"><i className="fa fa-phone"></i><a href="#" className="fc-blue">030 270 041 905</a></li>
																		<li className="ff-primary"><i className="fa fa-phone"></i><a href="#"> 030 270 041 400</a></li>
																		<li className="ff-primary"><i className="fa fa-envelope"></i><a href="#" className="fc-blue"> E-Mail sender</a></li>
																	</ul>
																</div>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 flrt-r">
															{/* <div className="centr-sub-2">
											<h5 className="ff-secondary">Opening hours</h5>
											<span className="col-lg-6 col-xs-6 ff-primary">Donnerstag</span>
											<span className="col-lg-6 col-xs-6 ff-primary">09:00-18:00</span>
											<a className="col-lg-12 ff-primary" href="#">Alle Zeiten anzeigen</a>
										</div> */}
															<div className="centr-subs-2">
																<h5 className="ff-secondary">Websites & Profiles</h5>
																<p><i className="fa fa-window-maximize"></i><a className="ff-primary fc-blue" href="#">ProvenExpert.com</a></p>
																<p><i className="fa fa-window-maximize"></i><a className="ff-primary fc-blue" href="#">Blog</a></p>
																<div className="social-icons-proven">
																	<ul>
																		<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
																		<li><a href="#"><i className="fa fa-twitter"></i></a></li>
																		<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
																		<li><a href="#"><i className="fa fa-xing-square"></i></a></li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-5 flrt-r">
													<div className="center-second">
														<div className="center-second-main">
															{/* <p className="ff-primary">Bewertungen vom 14.12.2019 </p> */}
															<div className="row">
																<div className="col-lg-6 col-md-6">
																	<div className="for-main">
																		<span className="ff-primary">5,00 von 5</span>
																		<div className="starr">
																			<ul>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																				<li><i className="fa fa-star"></i></li>
																			</ul>
																		</div>
																		<h4 className="ff-secondary">SEHR GUT</h4>
																	</div>
																</div>
																<div className="col-lg-6 col-md-6">
																	<div className="icon-image">
																		<img src={manicon} />
																		<h5>recommendation</h5>
																	</div>

																</div>
															</div>
															<div className="star-rating">
																<div className="star-first">
																	<div className="row">
																		<div className="col-lg-8 col-md-8 col-sm-8 col-8">
																			<p className="ff-primary fc-blue"><a href="#">Possible applications</a></p>
																		</div>
																		<div className="col-lg-4 col-md-4 col-sm-4 col-4">
																			<div className="starrs">
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
																<div className="star-first">
																	<div className="row">
																		<div className="col-lg-8 col-md-8 col-sm-8 col-8">
																			<p className="ff-primary fc-blue"><a href="#">Features</a></p>
																		</div>
																		<div className="col-lg-4 col-md-4 col-sm-4 col-4">
																			<div className="starrs">
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
																<div className="star-first">
																	<div className="row">
																		<div className="col-lg-8 col-md-8 col-sm-8 col-8">
																			<p className="ff-primary fc-blue"><a href="#">Transparency</a></p>
																		</div>
																		<div className="col-lg-4 col-md-4 col-sm-4 col-4">
																			<div className="starrs">
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
																<div className="star-first">
																	<div className="row">
																		<div className="col-lg-8 col-md-8 col-sm-8 col-8">
																			<p className="ff-primary fc-blue"><a href="#">Privacy</a></p>
																		</div>
																		<div className="col-lg-4 col-md-4 col-sm-4 col-4">
																			<div className="starrs">
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
																<div className="star-first">
																	<div className="row">
																		<div className="col-lg-8 col-md-8 col-sm-8 col-8">
																			<p className="ff-primary fc-blue"><a href="#">Value</a></p>
																		</div>
																		<div className="col-lg-4 col-md-4 col-sm-4 col-4">
																			<div className="starrs">
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
														<div className="inputcol-2">
															<a href="/createcompany" className="btn-blue ff-primary">Register Your Company</a>
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


				<section id="competencies">
					<div className="wrapper">
						<div className="competencies-main">
							<p className="ff-primary"><span >TOP COMPETENCIES</span> (Based on 41 competencies)</p>
							<a href="#"><i className="fa fa-chevron-circle-down fc-blue"></i></a>
						</div>
					</div>
				</section>


				<section id="measure">
					<div className="wrapper">
						<div className="measure-main">
							<div className="row">
								<div className="col-lg-4">
									<div className="measure-sub">
										<h5><i className="fa fa-check"></i>Measure of satisfaction</h5>
										<span className="ff-primary">4.66/5.00</span>
										<div className="starres">
											<ul>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
											</ul>
										</div>
										<span>701 Reviews</span>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="measure-sub">
										<h5><i className="fa fa-check"></i>Measure of satisfaction</h5>
										<span className="ff-primary">4.66/5.00</span>
										<div className="starres">
											<ul>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
											</ul>
										</div>
										<span className="ff-primary">701 Reviews</span>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="measure-sub">
										<h5><i className="fa fa-check"></i>Measure of satisfaction</h5>
										<span className="ff-primary">4.66/5.00</span>
										<div className="starres">
											<ul>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
											</ul>
										</div>
										<span className="ff-primary">701 Reviews</span>
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
										<h5 className="fc-blue">3,218 Reviews on ProvenExpert.com</h5>
									</div>
								</div>
								<div className="col-lg-2 col-md-4 col-sm-12">
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
								<div className="col-lg-2 col-md-12">
									<div className="inputcol">
										<select>
											<option value="volvo">Volvo</option>
											<option value="saab">Saab</option>
											<option value="mercedes">Mercedes</option>
											<option value="audi">Audi</option>
										</select>
									</div>
								</div>
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
										<div className="two-r-main clearfix">
											<p className="ff-primary coment">
												I think the rating system is quite good. However, I would like that the sub-points of what should be evaluated and put in. I think the evaluation system is quite good. However, I would like that the sub-points of what should be evaluated and put in. I think the evaluation system is quite good. However, I would hope that the sub-items of what should be evaluated can and do.</p>

											<div className="col-lg-5 col-md-6 col-sm-12 flrt-r">
												<div className="star-rating-second">
													<div className="star-third">
														<div className="row">
															<div className="col-lg-8 col-md-8 col-sm-6 col-8">
																<p className="ff-primary">Possible applications</p>
															</div>
															<div className="col-lg-4 col-md-4 col-sm-4 col-4">
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
															<div className="col-lg-8 col-md-8 col-sm-8 col-8">
																<p className="ff-primary">Possible applications</p>
															</div>
															<div className="col-lg-4 col-md-4 col-sm-4 col-4">
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
															<div className="col-lg-8 col-md-8 col-sm-8 col-8">
																<p className="ff-primary">Possible applications</p>
															</div>
															<div className="col-lg-4 col-md-4 col-sm-4 col-4">
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
															<div className="col-lg-8 col-md-8 col-sm-8 col-8">
																<p className="ff-primary">Possible applications</p>
															</div>
															<div className="col-lg-4 col-md-4 col-sm-4 col-4">
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
															<div className="col-lg-8 col-md-8 col-sm-8 col-8">
																<p className="ff-primary">Possible applications</p>
															</div>
															<div className="col-lg-4 col-md-4 col-sm-4 col-4">
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
											<div className="col-lg-4 col-md-6 col-sm-12 flrt-r">
												<div className="mrtpt clearfix">
													<div className="customer-ser-head clearfix">
														<i className="lft-sty  fa fa-check"></i>
														<div className="cost-ben">
															<p className="ff-primary">Customer service</p>
															<span className="ff-primary">EXCELLENT (5.00)</span>
														</div>
													</div>
													<div className="customer-ser-head clearfix">
														<i className="lft-sty fa fa-check"></i>
														<div className="cost-ben">
															<p className="ff-primary">Customer service</p>
															<span className="ff-primary">EXCELLENT (5.00)</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="two-d-main clearfix">
											<div className="col-lg-12">
												<div className="prove-centre">
													<p className="ff-primary">Customer review & rating for:</p>
													<span className="ff-primary">ProvenExpert</span>
												</div>
											</div>

										</div>
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



export default connect(mapStateToProps, mapDispatchToProps)(Company)