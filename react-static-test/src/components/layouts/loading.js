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

const Header = () => (
  <header className="minimal-header">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="minimal-header-text">
            <h1>LOADING...</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
)

// The main layout for the product pages.
export default () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top no-background">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" className="logo-dark" />
          <img src={logoWhite} alt="" className="logo-white" />
        </a>
        <MainNav />
      </div>
    </nav>

    <Header />

    {/* <div class="content"> */}
    LOADING
    {/* </div> */}

    <Footer />
  </div>
)
