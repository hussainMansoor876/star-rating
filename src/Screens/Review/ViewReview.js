import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import manicon from '../../assets/img/man-icon-2.png';
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
            review: {}
        }
    }

    async componentWillMount() {
        await axios.post('https://star-rating123.herokuapp.com/post/search-review', {
            _id: this.props.match.params.id
        })
            .then((response) => {
                var { data } = response
                this.setState({ review: data.data })
            })
    }


    render() {
        const { review } = this.state
        var count = (review.applicationStars + review.featuresStars + review.clarityStars + review.privacyStars + review.customerService) / 5
        return (
            <div className="main-body">
                {review ? <section id="customer-service">

                    <div className="wrapper">
                        <div className="customer-service-main">
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
                                            <h3 className="ff-secondary">{review.reviewerName}</h3>
                                            <p className="ff-primary coment">{review.feedback}</p>

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
                </section> : null}
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