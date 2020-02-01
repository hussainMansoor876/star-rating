import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Footer from './Header/Footer';
import { Link } from 'react-router-dom'
import Exception from 'ant-design-pro/lib/Exception';



class Page404 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            result: true,
        }
    }




    render() {

        return (
            <div class="search-page">
                <Header {...this.props} />
                <Exception type="404" style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }} desc="Page Not Found!!!" />
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
    }
}



export default connect(mapStateToProps, null)(Page404)