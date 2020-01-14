import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { removeUser } from '../../Redux/actions/authActions'
import logonew from '../../assets/img/new-logo.png';
import { connect } from 'react-redux';
var $ = require("jquery");


class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginRoutes: [{
        name: 'Home',
        route: '/'
      }, {
        name: 'Plan',
        route: '/plan'
      }, {
        name: 'Contact Us',
        route: '/contact'
      },
      ],
      routes: [{
        name: 'Dashboard',
        route: '/'
      }, {
        name: 'Plan',
        route: '/plan'
      }, {
        name: 'Contact Us',
        route: '/contact'
      }, {
        name: 'Login',
        route: '/login',
        className: 'nav-login'
      }, {
        name: 'Signup',
        route: '/register',
        className: 'nav-login'
      }
      ]
    }
  }

  componentWillMount() {
    const { user, location } = this.props
    const { loginRoutes, routes } = this.state
    var fill = routes.filter((obj) => {
      return obj.route !== location.pathname;
    })
    if (user) {
      var name = user.name.split(' ')[0]
      loginRoutes.push({
        name: name,
        pic: user.profilePic.url,
        route: '/profile'
      })
    }

    console.log(loginRoutes)

    var fill1 = loginRoutes.filter((obj) => {
      if(location.pathname === '/createcompany' && obj.route == '/profile'){
        return
      }
      return obj.route !== location.pathname;
    })


    this.setState({ loginRoutes: fill1, routes: fill })
  }

  logout() {
    setTimeout(() => {
      this.props.history.push('/login', { reload: true })
    }, 100)
  }

  toggle() {
    $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');

    $(document).mouseup(function (e) {
      var container = $(".mobile-nav, .mobile-nav-btn");

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.mobile-nav-btn, .mobile-nav, .app-container').removeClass('active');
      }
    });
  }


  render() {
    const { user, location } = this.props
    const { loginRoutes, routes } = this.state

    return (
      <div>
        <header>
          <div className="wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="main-logo">
                  <NavLink to='#'><img src={logonew} alt="" /></NavLink>
                  <form method="get">
                    <div className="input-group">
                      <div className="input-group-addon" id="order">
                        <div className="select-style">
                          <select name="order">
                            <option value="" disabled>Select Your Type</option>
                            <option defaultValue="a">A</option>
                            <option value="b">B</option>
                          </select>
                        </div>
                      </div>
                      <input type="text" name="search" id="search" className="form-control" placeholder="Search For ..." autoComplete="off" />
                      <div className="input-group-addon" id="sub">
                        <button className="submit" type="submit">
                          <span className="fa fa-search"></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <nav className="nav-list">
                  {user ? <ul>
                    {loginRoutes.map((v, i) => {
                      if (v.route == '/profile') {
                        return <li><Link to="/profile"><img height={30} width={30} style={{ borderRadius: 50 }} src={user.profilePic.url} alt="" />{user.name.split(' ')[0]}</Link></li>
                      }
                      return <li><Link to={v.route} className={v.className ? v.className : null}>{v.name}</Link></li>
                    })}
                    {
                      location.pathname === '/profile' && <li><Link to='/createcompany' className='nav-login' >Company</Link></li>
                    }
                    <li className="nav-login"><Link to="#" onClick={() => this.logout()}>Logout</Link></li>
                  </ul> : <ul>
                      {routes.map((v, i) => {
                        return <li className={v.className ? v.className : null}><Link to={v.route}>{v.name}</Link></li>
                      })}
                    </ul>}
                </nav>
              </div>
            </div>
          </div>

        </header>


        <div className="mob-section">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="main-logo mob-first">
                  <a href='#'><img src={logonew} alt="" /></a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mobile-nav" id="nav">
                  <a href="#">
                    <div className="mob-nav-logo ptpx-15 pbpx-15 plpx-30">
                      <div className="main-logo">
                        <a><img src={logonew} alt="" /></a>
                      </div>
                    </div>
                  </a>
                  <nav>
                    <div className="mob-nav-list">
                      {user ? <ul>
                        <li className='mobile-form'>
                          <form method="get">
                            <div className="input-group">
                              <div className="input-group-addon" id="order">
                                <div className="select-style">
                                  <select name="order">
                                    <option value="" disabled>Select Your Type</option>
                                    <option defaultValue="a">A</option>
                                    <option value="b">B</option>
                                  </select>
                                </div>
                              </div>
                              <input type="text" name="search" id="search" className="form-control" placeholder="Search For ..." autoComplete="off" />
                              <div className="input-group-addon" id="sub">
                                <button className="submit" type="submit">
                                  <span className="fa fa-search"></span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </li>
                        {loginRoutes.map((v, i) => {
                          if (v.route == '/profile') {
                            return <li><Link to="/profile"><img height={30} width={30} style={{ borderRadius: 50 }} src={user.profilePic.url} alt="" />{user.name.split(' ')[0]}</Link></li>
                          }
                          return <li><Link to={v.route} className={v.className ? v.className : null}>{v.name}</Link></li>
                        })}
                        {
                          location.pathname === '/profile' && <li><Link to='/createcompany' className='nav-login' >Create Company</Link></li>
                        }
                        <li className="nav-login"><Link to="#" onClick={() => this.logout()}>Logout</Link></li>
                      </ul> : <ul>
                          <li className='mobile-form'>
                            <form method="get">
                              <div className="input-group">
                                <div className="input-group-addon" id="order">
                                  <div className="select-style">
                                    <select name="order">
                                      <option value="" disabled>Select Your Type</option>
                                      <option defaultValue="a">A</option>
                                      <option value="b">B</option>
                                    </select>
                                  </div>
                                </div>
                                <input type="text" name="search" id="search" className="form-control" placeholder="Search For ..." autoComplete="off" />
                                <div className="input-group-addon" id="sub">
                                  <button className="submit" type="submit">
                                    <span className="fa fa-search"></span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </li>
                          {routes.map((v, i) => {
                            return <li className={v.className ? v.className : null}><Link to={v.route}>{v.name}</Link></li>
                          })}
                        </ul>}
                    </div>
                  </nav>
                </div>
                <div className="mobile-nav-btn" onClick={() => this.toggle()}>
                  <span className="lines"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
    removeUser: () => dispatch(removeUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
