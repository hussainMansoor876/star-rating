import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/Login/SignUp'
import { connect } from 'react-redux'
import SessionStorageManager from './SessionStorageManager';
import Home from '../Screens/Home/Home'
import CompanyProfile from '../Screens/CompanyProfile/CompanyProfile'
import CreateCompany from '../Screens/CompanyProfile/CreateCompany'
import Contact from '../Screens/Contact/Contact'
import Daten from '../Screens/Daten/Daten'
import Header from '../Screens/Header/Header'
import impressum from '../Screens/Impressum/Impressum'
import Plan from '../Screens/Plan/Plan'
import ReviewerProfile from '../Screens/ReviewerProfile/ReviewerProfile'
import Profile from '../Screens/Profile/Profile'
import Search from '../Screens/Search/Search'
import Privacy from '../Screens/privacy/privacy'
import profilesearch from '../Screens/profile-search/profile-search'
import Exception from 'ant-design-pro/lib/Exception';
import Page404 from '../Screens/Page404'
import ViewReview from '../Screens/Review/ViewReview'


function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => isLoggedIn === true ? (
                <Component {...props} />
            ) : (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
            }
        />
    );
}


class Routes extends Component {

    state = {
        user: null,
    }

    UNSAFE_componentWillMount() {
        const { user } = this.props
        if (user) {
            this.setState({ user: user })
        }
    }


    render() {
        const { user } = this.props;


        return (
            <Router>

                {/* {user && <React.Fragment>
                    <Header user={this.state.user} />
                    <Navbar />
                </React.Fragment>} */}



                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" exact component={SignUp} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/company-view/:id" exact component={CompanyProfile} />
                    <Route path="/company" exact component={CreateCompany} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/daten" exact component={Daten} />
                    <Route path="/header" exact component={Header} />
                    <Route path="/impressum" exact component={impressum} />
                    <Route path="/plan" exact component={Plan} />
                    <Route path="/profile-view/:id" component={ReviewerProfile} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/search" component={Search} />
                    <Route path="/privacy" exact component={Privacy} />
                    <Route path="/profilesearch" exact component={profilesearch} />
                    <Route path="/review/:id" exact component={ViewReview} />
                    <Route component={Page404} />

                </Switch>
            </Router>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
    }
}

export default connect(mapStateToProps, null)(Routes)

