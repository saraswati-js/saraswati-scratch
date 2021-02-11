import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'

import Nav1 from '../components/nav/header-nav'
import Sidebar from '../components/sidebar'

export default function Blog() {
  const { posts } = useRouteData()

  return (
    <div className="page-content">
      <div className="top-search">
        <div className="input-group">
          <span className="input-group-addon"><i className="ti-search"></i></span>
          <input type="text" className="form-control" placeholder="Search for snippets ......" />
          <span className="input-group-addon close-search"><i className="ti-close"></i></span>
        </div>
      </div>

      <Nav1 />
      <Sidebar />
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-9 content">
            <h1>It's blog time.</h1>
            <div>
              <a href="#bottom" id="top">Scroll to bottom!</a>
            </div>
            <br />
            
            All Posts:
            <ul>
              {/* {posts.map(post => (
                <li key={post.id}>
                  <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
                </li>
              ))} */}
            </ul>
            <a href="#top" id="bottom">Scroll to top!</a>
          </div>
        </div>
      </div>
    </div>
  )
}
