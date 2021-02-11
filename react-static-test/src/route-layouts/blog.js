import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'

// import Nav1 from '../components/nav/header-nav'
// import Sidebar from '../components/sidebar'

export default function Blog() {
  const { posts } = useRouteData()
  return (
    // <div className="page-content">
      <div className="content-wrapper">
        All Posts:
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul>
        <a href="#top" id="bottom">Scroll to top!</a>
      </div>
    // </div>
  )
}
