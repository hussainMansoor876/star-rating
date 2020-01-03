import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './CompanyProfile.css'
import proven from '../../assets/img/user.png';
import manicon from '../../assets/img/man-icon-2.png';
import logonew from '../../assets/img/new-logo.png';
class Company extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="main-body">


<header>
          <div className="wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="main-logo">
                <a href='#'><img src={logonew} /></a>
                <form action="javascript:void(0)" method="get">
                    <div className="input-group">
                    <div className="input-group-addon" id="order">
                        <div className="select-style">
                          <select name="order">
                            <option value="" disabled>Select Your Type</option>
                            <option value="a" selected>A</option>
                            <option value="b">B</option>
                          </select>
                        </div>
                      </div>
                      <input type="text" name="search" id="search" className="form-control" placeholder="Search For ..." autocomplete="off" />
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
                  <ul>
                    <li><a href="http://localhost:3000/home">Home</a></li>
                    <li><a href="http://localhost:3000/plan">Plan</a></li>
                    <li><a href="http://localhost:3000/companyprofile">Company Profile</a></li>
                    <li><a href="http://localhost:3000/contact">Contact Us</a></li>
                    <li className="nav-login"><a href="http://localhost:3000">login</a></li>

                  </ul>
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
          <a href='#'><img src={logonew} /></a>
                </div>
          </div>
          <div className="col-md-6">
          <div className="mobile-nav" id="nav">
         <a href="#">
            <div className="mob-nav-logo ptpx-15 pbpx-15 plpx-30">
            <div className="main-logo">
            <a href='#'><img src={logonew} /></a>
                </div>
            </div>
         </a>
         <nav>
            <div className="mob-nav-list">
               <ul>
               <li className='mobile-form'>
                <form action="javascript:void(0)" method="get">
                      <div className="input-group">
                      <div className="input-group-addon" id="order">
                          <div className="select-style">
                            <select name="order">
                              <option value="" disabled>Select Your Type</option>
                              <option value="a" selected>A</option>
                              <option value="b">B</option>
                            </select>
                          </div>
                        </div>
                        <input type="text" name="search" id="search" className="form-control" placeholder="Search For ..." autocomplete="off" />
                        <div className="input-group-addon" id="sub">
                          <button className="submit" type="submit">
                            <span className="fa fa-search"></span>
                          </button>
                        </div>
                      </div>
                    </form>
                </li>
               <li><a href="http://localhost:3000/home">Home</a></li>
              <li><a href="http://localhost:3000/plan">Plan</a></li>
              <li><a href="http://localhost:3000/companyprofile">Company Profile</a></li>
              <li><a href="http://localhost:3000/contact">Contact Us</a></li>
              <li className="nav-login"><a href="http://localhost:3000">login</a></li>
              <li className="nav-signup"><a href="http://localhost:3000/register">Register</a></li>
               </ul>
            </div>
         </nav>
      </div>
      <div className="mobile-nav-btn">
         <span className="lines"></span>
      </div>
          </div>
        </div>
       </div>
      </div>


        {/* <section id="banner-3">
          <div className="wrapper">
            <div className="d-table w-100">
              <div className="d-table-cell va-middle">
                <div className="banner-content">
                  <h2 className="ff-secondary">Pricing and Features</h2>
                  <p className="ff-primary fc-white">The free version of ProvenExpert is — and always will be — free.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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
											<a href="#">View full description <i class="fa fa-chevron-circle-down fc-blue"></i></a>
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
												<span className="ff-primary direction"><i class="fa fa-map-marker"></i><a href="#" className="fc-blue"> Direction</a></span>
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
											<p><i class="fa fa-window-maximize"></i><a className="ff-primary fc-blue" href="#">ProvenExpert.com</a></p>
											<p><i class="fa fa-window-maximize"></i><a className="ff-primary fc-blue" href="#">Blog</a></p>
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








<footer>
        <div className="wrapper">
            <div className="sec-padding">
              <div className="row">
                  <div className="col-md-12">
                      <div className="footer-list">
                      <h5 className="fc-white">Your Logo Here</h5>
                        <p className="fc-white ff-primary">Online shops are checked for compliance with the Trusted Shops quality criteria before they are awarded the trustmark that they can then display on their website. Our quality criteria
                           involve strict requirements as to the service quality as well as legal requirements.
                            </p>
							<ul>
                                                    
													{/* <li><a href="#">Our Plain</a></li>
													<li><a href="#">Pricing</a></li> */}
													<li><a href="#">Contact Us</a></li>
													<li><a href="http://localhost:3000/privacy">Privacy Policy</a></li>
					
													</ul>
                        <span className="footer-social">
                          <a href="#"><i className="fa fa-facebook"></i></a>
                          <a href="#"><i className="fa fa-twitter"></i></a>
                          <a href="#"><i className="fa fa-instagram"></i></a>
                          <a href="#"><i className="fa fa-linkedin"></i></a>
                        </span>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        </footer>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  console.log("mapToState", state.authReducer)
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (isLoggedIn) => dispatch(loginUser(isLoggedIn)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Company)