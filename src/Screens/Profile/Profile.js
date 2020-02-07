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
import ReviewStatic from '../Review/ReviewStatic'
import { Rate, Pagination } from 'antd';
import { Player } from 'video-react';
import Review from '../Review/Review'

const reviewDesc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

class Reviewer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			user: '',
			success: true,
			editValue: null,
			editReview: false,
			index: 0,
			currPage: 1,
			visible: false
		}
	}


	componentDidMount() {
		const { user } = this.props
		if (!user) {
			this.props.history.replace('/login')
		}
	}

	handleCancel = () => {
		this.setState({ visible: false, editReview: false, editValue: null });
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

	async handleUpdate(values) {
		await axios.post('https://star-rating123.herokuapp.com/post/update-review', values)
			.then((response) => {
				var { data } = response
				this.handleCancel()
				if (data.success) {
					data.data.reviews = data.data.reviews.reverse()
					this.props.loginUser(data.data)
					setTimeout(() => {
						window.location.reload()
					})
				}
			})
	}

	handleStatic(values) {
		const { user } = this.props
		var company = {
			name: values.name,
			status: 'approved',
			url: values.url,
			profilePic: {
				url: 'https://res.cloudinary.com/dl39em2mk/image/upload/v1581094024/company_ggfyri.jpg',
			},
			user: {
				name: values.name,
				_id: toString(Math.random() * 10000000) + new Date().getTime(),
			},
		}
		company.ownerId = company.user._id
		if (!values.video) {
			delete values.video
		}
		values.companyName = values.name
		values.ownerId = company.ownerId
		values.ownerName = company.name
		values.reveiwerName = user.name
		values.reveiwerId = user._id
		var formData = new FormData();
		for (var i in values) {
			formData.append(i, values[i])
		}
		if (values.video) {
			formData.append('video', values.video[0].originFileObj)
		}
	}


	render() {
		const { user } = this.props
		const { index } = this.state
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
																<div className="inputcol-2">
																	<button className="btn-blue ff-primary" style={{ width: '100%' }} onClick={() => this.setState({ visible: true })}>Add Review</button>
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
					{user.reviews.slice(index, index + 5).map((v, i) => {
						var count = (v.applicationStars + v.featuresStars + v.clarityStars + v.privacyStars + v.customerService) / 5
						return (
							<div className="wrapper" key={i}>
								<div className="customer-service-main">
									<div className="inputcol-2 edit1">
										<button className="btn-blue ff-primary" style={{ width: '120px' }} onClick={() => this.setState({ editValue: v, editReview: true })}>Edit</button>
									</div>
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
													<h3 className="ff-secondary">To: {v.companyName}</h3>
													<p className="ff-primary coment">You: {v.feedback}</p>

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
						<Pagination defaultCurrent={1} total={user.reviews.length} defaultPageSize={5} onChange={(value) => this.updatePage(value)} />
					</div>
				</section> : null}
				{this.state.editValue ? <Review
					visible={this.state.editReview}
					editValue={this.state.editValue}
					onCancel={this.handleCancel}
					handleUpdate={this.handleUpdate.bind(this)}
				/> : null}

				{this.state.visible ? <ReviewStatic
					visible={this.state.visible}
					onCancel={this.handleCancel}
					editValue={null}
					handleStatic={this.handleStatic.bind(this)}
				/> : null}
				<Footer {...this.props} />
			</div>
		)
	}
}



const mapStateToProps = (state) => {
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