import React from 'react'

export default () => (
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
  </footer>
)
