import React from 'react'
import MainNav from '../../components/nav/MainNav'
import Footer from '../../components/nav/mainpage-footer'
// import logo from '../../assets/img/logo.png'
// import logoWhite from '../../assets/img/logo-white.png'

const logo = ''
const logoWhite = ''

// https://medium.com/javascript-in-plain-english/how-to-build-reusable-layouts-in-react-js-daf8adcbca79
//    - https://codesandbox.io/s/react-reusable-layouts-forked-dspst?file=/src/routes/Route.js
// https://gregberge.com/blog/react-scalable-layout

const Header = ({ headerTitle }) => (
  <header className="minimal-header">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="minimal-header-text">
            <h1>{headerTitle}</h1>
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
)

// The main layout for the product pages.
export default ({ headerTitle, children }) => (
  <div>
    <div className="top-search">
      <div className="input-group">
        <span className="input-group-addon"><i className="ti-search" /></span>
        <input type="text" className="form-control" placeholder="Search for snippets ......" />
        <span className="input-group-addon close-search"><i className="ti-close" /></span>
      </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top no-background">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" className="logo-dark" />
          <img src={logoWhite} alt="" className="logo-white" />
        </a>
        <MainNav />
      </div>
    </nav>

    <Header headerTitle={headerTitle} />
    
    {/* <div class="content"> */}
      {children}
    {/* </div> */}

    <Footer />
  </div>
)
