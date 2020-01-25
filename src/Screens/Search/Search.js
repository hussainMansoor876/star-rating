import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './Search.css';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import { Link } from 'react-router-dom'
import search from '../../assets/img/search-1.png';
import axios from 'axios'
import { Skeleton, Typography } from 'antd';

const { Title } = Typography;


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      result: true,
    }
  }

  async componentWillMount() {
    const { state } = this.props.history.location
    console.log('state', state)
    if (state) {
      const { searchInput, searchType } = state
      await axios.post('http://localhost:5001/post/search', {
        searchInput,
        searchType
      })
        .then((response) => {
          console.log('response', response)
          this.setState({
            data: response.data.data,
            result: response.data.data.length ? true : false
          })
          // this.props.history.replace('', null)
        })
    }
  }



  render() {
    const { data, result } = this.state
    const { state } = this.props.history.location
    return (
      <div class="search-page">
        <Header {...this.props} />

        {/* <section id="banner-7">
          <div className="wrapper">
            <div className="d-table w-100">
              <div className="d-table-cell va-middle">
                <div className="banner-content">
                  <h2 className="ff-secondary">Search For Companies</h2>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div className="search-company">
          <div className="wrapper">
            {data.length && result ?
              <div className="sec-padding">
                <center><h1>Search Result!!!</h1></center>
                {state.searchType === 'company' ?
                  data.map((v, i) => {
                    return (
                      <div className="search-box" key={i}>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 search-b-right">
                            <div className="search-img">
                              <img src={v.profilePic.url} />
                              <h5 className="ff-secondary">{v.name}</h5>
                              <h6 className="ff-secondary">Reviews: 50,000,00 <i className="fa fa-star"></i></h6>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-8">
                            <div className="search-content">
                              <div className="company-intro">
                                <h5 className="ff-primary"><Link to={v.url}>{v.url}</Link></h5>
                                <span className="search-stars-icon">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                                <p className="ff-primary">
                                  {v.description}
                                </p>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-5">
                                  <div className="search-company-contact">
                                    <h5 className="ff-secondary">Contact Information :</h5>
                                    <p className="ff-primary">{v.address}</p>
                                    <p className="ff-primary">{v.contactEmail}</p>
                                    <p className="ff-primary"> {v.contactNo}</p>
                                    <p className="search-social-icon">
                                      <a href="#"> <i className="fa fa-facebook"></i></a>
                                      <a href="#"> <i className="fa fa-twitter"></i></a>
                                      <a href="#"> <i className="fa fa-instagram"></i></a>
                                      <a href="#"> <i className="fa fa-linkedin"></i></a>
                                    </p>

                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-7">
                                  <div className="search-company-time">
                                    <h5 className="ff-secondary">Location:</h5>
                                    <p className="ff-primary">Country: {v.country}</p>
                                    <p className="ff-primary">City: {v.city}</p>
                                    <a href="#" className="ff-primary"><button> Read More </button></a>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }) :
                  data.map((v, i) => {
                    return (
                      <div className="search-box" key={i}>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 search-b-right">
                            <div className="search-img">
                              <img src={v.profilePic.url} />
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-8">
                            <div className="search-content">
                              <div className="company-intro">
                                <h5 className="ff-secondary">{v.name}</h5>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-5">
                                  <div className="search-company-contact">
                                    <h5 className="ff-secondary">Contact Information :</h5>
                                    <p className="ff-primary">{v.address}</p>
                                    <p className="ff-primary">{v.email}</p>
                                    <p className="ff-primary"> {v.contactNo}</p>

                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-7">
                                  <div className="search-company-time">
                                    <Link to={""} className="ff-primary"><button> Read More </button></Link>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div> :
              !data.length && !result ?
                <center><h1 style={{ marginTop: 120, marginBottom: 120 }}>OOPS No result found</h1></center>
                :
                <div style={{ marginTop: 20 }}>
                  <Skeleton avatar paragraph={{ rows: 4 }} />
                </div>
            }
          </div>
        </div>

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



export default connect(mapStateToProps, mapDispatchToProps)(Search)