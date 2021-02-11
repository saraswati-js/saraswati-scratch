import React from 'react'
import MainNav from '../components/nav/MainNav'
import logo from '../assets/img/logo.png'
import logoWhite from '../assets/img/logo-white.png'

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
    <header className="minimal-header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="minimal-header-text">
              <h1>Oh no!</h1>
              {/* <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item">404 Error Page</li>
                </ol>
              </nav> */}
            </div>
          </div>
        </div>
      </div>
    </header>
    
    {/* /.End of header */}
    <div className="error-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div className="error-text">
              <h1 className="error">404</h1>
              <p>
                The path <code>{window.location.pathname}</code> doesn't seem to exist. Whoopsies.
              </p>
              <div className="sheep">
                <div className="top">
                  <div className="body" />
                  <div className="head">
                    <div className="eye one" />
                    <div className="eye two" />
                    <div className="ear one" />
                    <div className="ear two" />
                  </div>
                </div>
                <div className="legs">
                  <div className="leg" />
                  <div className="leg" />
                  <div className="leg" />
                  <div className="leg" />
                </div>
              </div>
              <h4>Oops! This page Could Not Be Found!</h4>
              <p>Sorry but the page you are looking for does not exist, has been removed or name changed ¯\_(ツ)_/¯</p>
              <a href="/" className="btn btn-primary btn-round">Go to homepage</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.End of error content */}
    <footer className="bg-gray border-top">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="footer-about">
                <div className="footer-logo">
                  <img src="assets/img/logo.png" alt="" className="img-fluid" />
                </div>
                <p>Bangladesh Office
                98 Green Road, Farmgate, Dhaka- 1215 </p>
                <a className="email-link" href="mailto:bdtask@gmail.com">bdtask@gmail.com</a>
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
                  <p className="m-0">Copyright © 2016-2018 <a href="#" target="_blank">bdtask </a>. All rights reserved. </p>
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
    </footer>{/* /.End of footer */}
  </div>
)
