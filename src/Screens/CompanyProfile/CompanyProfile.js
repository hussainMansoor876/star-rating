import React, { Component } from 'react';
import { loginUser } from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import './CompanyProfile.css'
import proven from '../../assets/img/proven.jpg';
import manicon from '../../assets/img/man-icon.png';
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
              <div className="col-md-3">
                <div className="main-logo">
                  <h5 className="fc-blue">Your Logo Here</h5>
                </div>
              </div>
              <div className="col-md-9">
                <nav className="nav-list">
                  <ul>
                    <li><a href="http://localhost:3000/home">Home</a></li>
                    <li><a href="http://localhost:3000/home">About Us</a></li>
                    <li><a href="http://localhost:3000/home">Pricing</a></li>
                    <li><a href="http://localhost:3000/home">User Review</a></li>
                    <li><a href="http://localhost:3000/plan">Plan</a></li>
                    <li><a href="http://localhost:3000/contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

        </header>




        <section id="banner-3">
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
        </section>

        <section id="inside-banner">
          <div className="wrapper">
            <div className="inside-banner-image">
              <div className="inside-content">
                  <button className="btn-blue"><i className="fa fa-phone"></i> Bitte um Rückruf</button>
                  <button className="btn-blue"><i className="fa fa-envelope"></i> Nachricht schreiben</button>
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
					<div className="push-md-2 col-md-10">
						<div className="exp-con">
							<h3>ProvenExpert.com</h3>
							<h4>Bewertungsmarketing & Kundenzufriedenheitsanalyse</h4>
						</div>
					</div>
					<div className="pull-md-10 col-md-2 flrt-r">
						<div className="exp-con-left">
							<div className="row">
								<div className="col-md-12">
									<div className="proven-con">
										<img src={proven} />
									</div>
								</div>
								<div className="col-md-12">
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
										<h4>SEHR GUT</h4>
										<h6>3.853 Bewertungen</h6>
										<div className="pproven-bottom-last">
											<span className="line-top"></span>
											<span className="lie-botm"></span>
											<a className="a-tg-h" href="#"><span>637</span>
                       Bewertungen </a>
                       <a className="a-tg-h" href="#"><span>4</span>
                       anderen Quellen </a> 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-10 push-md-2">
						<div className="center-proven">
							<div className="col-md-7">
								<div className="center-first">
									<div className="col-md-12">
										<div className="center-first-sub">
											<p className="ff-primary">Die ideale Lösung für Ihr Bewertungs-Marketing: Für mehr Vertrauen, Kunden & Umsatz</p>
											<p className="ff-primary">Mit ProvenExpert.com holen Sie das Feedback Ihrer Kunden ein und präsentieren Ihre 		   gesamten Kundenbewertungen aus allen Portalen auf einem Bewertungssiegel. Mit...</p>
											<a href="#">Komplette Beschreibung anzeigen</a>
										</div>
									</div>
									<div className="col-md-6">
										<div className="centr-sub-1">
											<div className="centr-sub-1-main">
												<h5>Kontaktdaten</h5>
												<span>ProvenExpert.com</span>
												<span>Quedlinburger Straße 1</span>
												<span>10589 Berlin</span>
												<span>Deutschland</span>
												<p><i className="fa fa-location"></i><a href="#"> Anfahrt</a></p>
											</div>
											<div className="centr-sub-2-main">
												<h5>Ansprechpartner</h5>
												<span>Remo Fyda</span>
												<ul>
													<li><i className="fa fa-phone"></i><a href="#">030 270 041 905</a></li>
													<li><i className="fa fa-phone"></i><a href="#"> 030 270 041 400</a></li>
													<li><i className="fa fa-envelope"></i><a href="#"> E-Mail senden</a></li>
													<li><i className="fa fa-phone"></i><a href="#">Termin vereinbaren</a></li>
													<li><i className="fa fa-phone"></i><a href="#">Impressum</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="centr-sub-2">
											<h5>Öffnungszeiten</h5>
											<span className="col-md-6 col-xs-6">Donnerstag</span>
											<span className="col-md-6 col-xs-6">09:00-18:00</span>
											<a className="col-md-12" href="#">Alle Zeiten anzeigen</a>
										</div>
										<div className="centr-subs-2">
											<h5>Webseiten & Profile</h5>
											<p><i className="fa fa-location"></i><a href="#">ProvenExpert.com</a></p>
											<p><i className="fa fa-location"></i><a href="#">Blog</a></p>
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
							<div className="col-md-5">
								<div className="center-second">
									<div className="center-second-main">
										<p className="ff-primary">Bewertungen vom 14.12.2019 </p>
										<div className="row">
											<div className="col-md-6">
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
											<h4>SEHR GUT</h4>
											</div>
											<div className="col-md-6">
												<div className="icon-image">
													<img src={manicon} />
												</div>
												<h5>Empfehlung</h5>
											</div>
										</div>
										<div className="star-rating">
											<div className="star-first">
												<div className="row">
													<div className="col-md-6">
														<p className="ff-primary">Possible applications</p>
													</div>
													<div className="col-md-6">
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
													<div className="col-md-6">
														<p className="ff-primary">Possible applications</p>
													</div>
													<div className="col-md-6">
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
													<div className="col-md-6">
														<p className="ff-primary">Possible applications</p>
													</div>
													<div className="col-md-6">
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
													<div className="col-md-6">
														<p className="ff-primary">Possible applications</p>
													</div>
													<div className="col-md-6">
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
													<div className="col-md-6">
														<p className="ff-primary">Possible applications</p>
													</div>
													<div className="col-md-6">
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
	</section>


	<section id="competencies">
		<div className="wrapper">
			<div className="competencies-main">
				<p><span>TOP COMPETENCIES</span> (Based on 3,216 published reviews)</p>
				<a href="#"><i className="fa fa-chevron-circle-down"></i></a>
			</div>
		</div>
	</section>


	<section id="measure">
		<div className="wrapper">
			<div className="measure-main">
				<div className="row">
					<div className="col-md-4">
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
					<div className="col-md-4">
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
					<div className="col-md-4">
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
				</div>
			</div>
		</div>
	</section>

	<section id="reviews">
		<div className="wrapper">
			<div className="reviews-main">
				<div className="row">
					<div className="col-md-8">
						<div className="reviews-head">
							<h5>3,218 Reviews on ProvenExpert.com</h5>
						</div>
					</div>
					<div className="col-md-2">
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
						<span>EXCELLENT</span>
					</div>
					<div className="col-md-2">
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
					<div className="col-md-2">
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
							<span>EXCELLENT</span>
						</div>
						<div className="two-icon">
            <img src={manicon} />
							<h5>Recommendation</h5>
						</div>
					</div>
					<div className="col-md-10">
						<p>Das Bewertungssystem finde ich recht gut. Allerdings würde ich mir wünschen, das man die Unterpunkte was bewertet werden soll aus und anstellen kann.Das Bewertungssystem finde ich recht gut. Allerdings würde ich mir wünschen, das man die Unterpunkte was bewertet werden soll aus und anstellen kann.Das Bewertungssystem finde ich recht gut. Allerdings würde ich mir wünschen, das man die Unterpunkte was bewertet werden soll aus und anstellen kann.</p>
						<div className="two-r-main">
							<div className="col-md-4">
								<div className="star-rating-second">
									<div className="star-third">
										<div className="row">
											<div className="col-md-6">
												<p className="ff-primary">Possible applications</p>
											</div>
											<div className="col-md-6">
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
											<div className="col-md-6">
												<p className="ff-primary">Possible applications</p>
											</div>
											<div className="col-md-6">
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
											<div className="col-md-6">
												<p className="ff-primary">Possible applications</p>
											</div>
											<div className="col-md-6">
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
											<div className="col-md-6">
												<p className="ff-primary">Possible applications</p>
											</div>
											<div className="col-md-6">
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
											<div className="col-md-6">
												<p className="ff-primary">Possible applications</p>
											</div>
											<div className="col-md-6">
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
							<div className="col-md-4">
								<div className="customer-ser-head">
									<i className="fa fa-check"></i>
									<div className="cost-ben">
										<p>Customer service</p>
										<span>EXCELLENT (5.00)</span>
									</div>
								</div>
								<div className="customer-ser-head">
										<i className="fa fa-check"></i>
									<div className="cost-ben">
										<p>Customer service</p>
										<span>EXCELLENT (5.00)</span>
									</div>
								</div>
							</div>
						</div>
						<div className="two-d-main">
							<div className="col-md-8">
								<div className="prove-centre">
									<p>Erfahrungsbericht & Bewertung zu:</p>
									<span>ProvenExpert</span>
								</div>
							</div>
							<div className="col-md-4">
								<div className="prove-centre-lnk">
									<a href="#">Weniger anzeigen<i className="fa fa-chevron-up"></i></a>
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
                            <li><a href="#">Heplcenter</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Our Plain</a></li>
                            <li><a href="#">Pricing</a></li>

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