import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'

import { Router } from 'components/Router'
// import Nav1 from 'components/nav/header-nav'
// import Sidebar from 'components/sidebar'
import Dynamic from 'route-layouts/Dynamic'
import Loading from './components/layouts/loading'

import './assets/styles'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

export default () => (
  <Root>
    {/* <div className="top-search">
      <div className="input-group">
        <span className="input-group-addon"><i className="ti-search"></i></span>
        <input type="text" className="form-control" placeholder="Search for snippets ......" />
        <span className="input-group-addon close-search"><i className="ti-close"></i></span>
      </div>
    </div>

    <Nav1 />
    <Sidebar /> */}

    <div className="content">
      <React.Suspense fallback={<Loading />}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </div>
  </Root>
)
