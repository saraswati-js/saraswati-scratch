import React from 'react'
import { Link } from 'components/Router'

const truncateString = (str, length, ending = '...') => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }

  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

export default ({ crumbs }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {crumbs.map(crumb => (
        <li className="breadcrumb-item" key={crumb.link}>
          <Link to={crumb.link.toString()}>
            {truncateString(crumb.title, 40)}
          </Link>
        </li>
      ))}
    </ol>
  </nav>
)
