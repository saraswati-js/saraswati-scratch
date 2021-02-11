import React from 'react'
import Layout from '../components/layouts'

export default () => (
  <Layout headerTitle="About Us">
    <div className="contact-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-7">
            <div className="contect-des">
              <div className="contact-header">
                <h2>
                  <span className="superheadline">Bdtask</span>
                  <span className="headline">1355 Market St, Suite 900 San Francisco, CA 94103</span>
                </h2>
                <p>For help with a technical problem relating to our Tompkins Appliance or our apps please visit our Customer Services Helpdesk.
              Help with any matters about subscriptions.</p>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="media contact-service">
                    <i className="flaticon-world mr-3" />
                    <div className="media-body">
                      <h4 className="mt-0">Address</h4>
                      <div>1355 Market St, Suite 900 San Francisco, CA 94103</div>
                    </div>
                  </div>
                  <div className="media contact-service">
                    <i className="flaticon-24-hours mr-3" />
                    <div className="media-body">
                      <h4>Working hours</h4>
                      <div>
                        Monday-Friday: 9AM–12:30PM 1:30–5PM <br />
                    Saturday-Sunday: Closed
                  </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <div className="media contact-service">
                    <i className="flaticon-email mr-3" />
                    <div className="media-body">
                      <h4>Email Address</h4>
                      <div>first.last@example.com<br />
                    info@example.com</div>
                    </div>
                  </div>
                  <div className="media contact-service">
                    <i className="flaticon-call  mr-3" />
                    <div className="media-body">
                      <h4>Phone Number</h4>
                      <div>Support: +88-01817-584639
                    Sales: +88-01922-296392</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <form className="contact-form">
              <h3>Let's Talk!</h3>
              <div className="row">
                <div className="col-md-9">
                  <div className="form-group">
                    <label>Your Name (required)</label>
                    <input type="text" className="form-control" id="f_name" name="f_name" />
                  </div>
                  <div className="form-group">
                    <label>Your Email (required)</label>
                    <input type="text" className="form-control" id="l_name" name="l_name" />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" className="form-control" id="email" name="email" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" id="message" name="message" rows={5} defaultValue={""} />
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="form-group">
                    <label>Are you human? 3 + 1 =</label>
                    <input type="text" className="form-control" id="human" name="human" />
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-primary btn-outline-primary">Submit</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
