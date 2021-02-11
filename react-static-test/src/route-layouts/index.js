import React from 'react'
import MainNav from '../components/nav/MainNav'

import home_illo from '../assets/img/home_illo.png'
import logo from '../assets/img/logo.png'
import logoWhite from '../assets/img/logo-white.png'
import macbook from '../assets/img/macbook.png'
import react from '../assets/img/logo/react.png'
import bootstrapstack from '../assets/img/logo/bootstrap-stack.png'
import sass from '../assets/img/logo/Sass.png'
import nodejs from '../assets/img/logo/nodejs.png'
import ngx from '../assets/img/logo/ngx.png'
import redux from '../assets/img/logo/redux.png'
import reactrouter from '../assets/img/logo/react-router.png'
import grunt from '../assets/img/logo/grunt.png'
import brand7 from '../assets/img/brand/7.png'
import brand8 from '../assets/img/brand/8.png'
import brand9 from '../assets/img/brand/9.png'
import brand10 from '../assets/img/brand/10.png'
import brand11 from '../assets/img/brand/11.png'
import bgheader from '../assets/img/header-bg-2.png'

export default () => (
  <div>
    <div className="top-search">
      <div className="input-group">
        <span className="input-group-addon"><i className="ti-search" /></span>
        <input type="text" className="form-control" placeholder="Search for snippets ......" />
        <span className="input-group-addon close-search"><i className="ti-close" /></span>
      </div>
    </div>
    {/* /.End of Top Search */}
    <nav className="navbar navbar-expand-lg navbar-light fixed-top no-background">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" className="logo-dark" />
          <img src={logoWhite} alt="" className="logo-white" />
        </a>
        
        <MainNav />
      </div>
    </nav>
    {/* /.End of Navbar */}
    <div className="header-3" style={{ backgroundImage: `url(${bgheader})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="header-title">Documentation your projects <strong>effectively</strong> and <strong>simple</strong>.</h2>
            <p className="sub-title">You made a good documentation for your software. docBanao very simplifies<br className="d-none d-xl-block" /> for your software documentation by automating <span>building</span>,<br className="d-none d-xl-block" /> <span>versioning,</span> and <span>hosting</span>. </p>
            <div className="header-btn">
              <a href="/docs" className="btn btn-white btn-round">Check out the docs</a> 
              <a href="/changelog" className="btn btn-white btn-round">Go to the changelog</a>
            </div>
            <div className="mackbook">
              <img src={macbook} className="header-img img-fluid" alt="" />
              <div className="video">
                <div className="video-meta">
                  <a className="video-play popup-youtube" href="http://www.youtube.com/watch?v=0O2aH4XLbto">
                    <svg className="Play" width="100%" viewBox="0 0 100 100">
                      <circle className="Play-bg" cx={50} cy={50} r={30} fill="#000" />
                      <path className="Play-triangle" d="M45.8 62.1c-1.5 1-2.7.3-2.7-1.5V40.1c0-1.8 1.2-2.5 2.7-1.5l15.6 10c1.5 1 1.5 2.5 0 3.5l-15.6 10z" fill="#fff" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.End of header */}
    <div className="technology">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col max-col">
                <div className="technology-img text-center">
                  <img src={react} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col max-col">
                <div className="technology-img text-center">
                  <img src={bootstrapstack} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col max-col">
                <div className="technology-img text-center">
                  <img src={sass} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col max-col">
                <div className="technology-img text-center">
                  <img src={nodejs} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col max-col">
                <div className="technology-img text-center">
                  <img src={ngx} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col max-col">
                <div className="technology-img text-center">
                  <img src={redux} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col max-col">
                <div className="technology-img text-center">
                  <img src={reactrouter} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col max-col">
                <div className="technology-img text-center">
                  <img src={grunt} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.End of technology content */}
    <div className="service-content">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            <div className="section-title">
              <h2>Build a document for software, apps <br className="d-none d-xl-block" />and other services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className="service-box">
              <div className="icon">
                <i className="flaticon-thought" />
              </div>
              <h3 className="title">We Innovate</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when.
            </p>
              <a href="#" className="read-link">Read More <i className="ti-arrow-right" /></a>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="service-box">
              <div className="icon">
                <i className="flaticon-analytics" />
              </div>
              <h3 className="title">Performance</h3>
              <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
              opposed.</p>
              <a href="#" className="read-link">Read More <i className="ti-arrow-right" /></a>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="service-box">
              <div className="icon">
                <i className="flaticon-support" />
              </div>
              <h3 className="title">A Full Service</h3>
              <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.</p>
              <a href="#" className="read-link">Read More <i className="ti-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="service-img">
              <img src={home_illo} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="component-block d-flex">
              <div className="component-icon">
                <i className="flaticon-student"><span /></i>
              </div>
              <div className="component-text">
                <h3>What is a service desk?</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its
                layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed tousing </p>
                <a href="#" className="read-link">Read More <i className="ti-arrow-right" /></a>
              </div>
            </div>
            <div className="component-block d-flex">
              <div className="component-icon">
                <i className="flaticon-ninja"><span /></i>
              </div>
              <div className="component-text">
                <h3>Become an IT ninja</h3>
                <p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                text, and a search for 'lorem ipsum'
                will uncover many web sites still in their infancy. Various versions have evolved over the years.</p>
                <a href="#" className="read-link">Read More <i className="ti-arrow-right" /></a>
              </div>
            </div>
            <div className="component-block d-flex">
              <div className="component-icon">
                <i className="flaticon-see"><span /></i>
              </div>
              <div className="component-text">
                <h3>Work faster with your tools in one place</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour,
                or randomised words.</p>
                <a href="#" className="read-link">Read More <i className="ti-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.End of service content */}
    <div className="user-content">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            <div className="section-title">
              <h2>You’re in good company</h2>
              <p>Trusted by more than 1M businesses and organizations. It is a long established fact that a reader will
              be distracted.</p>
              <a href="#" className="btn btn-outline">Discover why</a>
            </div>
          </div>
        </div>
        <div className="user-logo">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row box-shadow">
                <figure className="col logo-item">
                  <img src={brand7} className="img-fluid" alt="" />
                </figure>
                <figure className="col logo-item">
                  <img src={brand8} className="img-fluid" alt="" />
                </figure>
                <figure className="col logo-item">
                  <img src={brand9} className="img-fluid" alt="" />
                </figure>
                <figure className="col logo-item">
                  <img src={brand10} className="img-fluid" alt="" />
                </figure>
                <figure className="col logo-item">
                  <img src={brand11} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* /.End of user logo */}       
      </div>
    </div>
    {/* /.End of help content */}
    <div className="subSection dark-theme">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h4>Can't find what you're looking for?</h4>
            <p>If your question is not answered above, we're happy to help.</p>
            <a className="btn btn-white btn-round" href="/">Submit a Support Request</a>
          </div>
        </div>
      </div>
    </div>
    {/* /.End of subSection */}
    <footer className="bg-gray">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="footer-about">
                <div className="footer-logo">
                  <img src={logo} alt="" className="img-fluid" />
                </div>
                <p>Bangladesh Office
                98 Green Road, Farmgate, Dhaka- 1215 </p>
                <a className="email-link" href="/">bdtask@gmail.com</a>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="footer-link">
                <h4 className="link-title">Resources</h4>
                <a href="#" className="link">Guides</a>
                <a href="help.html" className="link">Help Center</a>
                <a href="#" className="link">Technical support</a>
                <a href="layout-general.html" className="link">Documentation</a>
                <a href="#" className="link">App Directory</a>
              </div>
            </div>
            <div className="col-6 col-md-2 d-md-none d-lg-block">
              <div className="footer-link">
                <h4 className="link-title">Company</h4>
                <a href="about.html" className="link">About us</a>
                <a href="#" className="link">Press Kit</a>
                <a href="#" className="link">Careers</a>
                <a href="#" className="link">Brand Guidelines</a>
                <a href="contact.html" className="link">Contact Support</a>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <div className="newslatter">
                <h4 className="link-title">Connect with us</h4>
                <p>Subscribe to our newsletter!</p>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Enter Your Email" />
                  <div className="input-group-append">
                    <button className="btn btn-outline" type="button">Subscribe</button>
                  </div>
                </div>
              </div>{/* /.End of newslatter */}
              <ul className="social-icon">
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="#"><i className="fab fa-telegram-plane" /></a></li>
                <li><a href="#"><i className="fab fa-whatsapp" /></a></li>
              </ul>{/* /.End of footer social icon */}
            </div>
          </div>
          <div className="sub-footer">
            <div className="row align-items-center ">
              <div className="col-md-7 order-md-first order-last">
                <div className="Copyright-text">
                  <p className="m-0">Copyright © 2016-2018 <a href="#" target="_blank">bdtask </a>. All rights reserved.
                </p>
                  <p className="m-0 d-none d-sm-block">Built with <a href="#" target="_blank">bdtask </a> using a <a href="#" target="_blank">theme</a> provided by <a href="#" target="_blank">docBanao.</a></p>
                </div>
              </div>
              <div className="col-md-5">
                <ul className="footer-menu">
                  <li><a href>Terms of use </a></li>
                  <li><a href="changelog.html">Changelog</a></li>
                  <li><a href="mailto:thepostcodeco@gmail.com">Contact us</a></li>
                </ul>
              </div>
            </div>
          </div>{/* /.End of sub footer */}
        </div>
      </div>
    </footer>
  </div>

)
