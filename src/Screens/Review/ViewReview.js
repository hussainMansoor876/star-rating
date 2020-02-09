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
            user: '',
            success: true,
            editValue: null,
            editReview: false,
            index: 0,
            currPage: 1,
            visible: false
        }
    }

    async componentWillMount() {
        await axios.post('https://star-rating123.herokuapp.com/post/search-review', {
            _id: this.props.match.params.id
        })
            .then((response) => {
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
                    }, 500)
                }
            })
    }

    handleStatic(values) {
        const { user } = this.props
        var id = new Date().getTime()
        var company = {
            name: values.name,
            status: 'approved',
            url: values.url,
            profilePic: {
                url: 'https://res.cloudinary.com/dl39em2mk/image/upload/v1581094024/company_ggfyri.jpg',
            },
            user: {
                name: values.name,
                _id: JSON.stringify(id)
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

        axios.post('https://star-rating123.herokuapp.com/post/static-company', company)
            .then((response) => {
                var { data } = response
                console.log(data)
                this.handleCancel()
                if (data.success) {
                    formData.append('companyId', data._id)
                    axios.post('https://star-rating123.herokuapp.com/post/add-review', formData)
                        .then((response) => {
                            var { data } = response
                            data.data.reviews = data.data.reviews.reverse()
                            this.props.loginUser(data.data)
                        })
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }


    render() {
        const { user } = this.props
        const { index } = this.state
        if (!user) {
            return (
                <div className="main-body">
                    <Header {...this.props} />
                </div>
            )
        }
        return (
            <div className="main-body">
                <Header {...this.props} />
                {user.reviews && user.reviews.length ? <section id="reviews">
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
                    {user.reviews && user.reviews.length ? <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginBottom: 50
                    }}>
                        <Pagination defaultCurrent={1} total={user.reviews.length} defaultPageSize={5} onChange={(value) => this.updatePage(value)} />
                    </div> : null}
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