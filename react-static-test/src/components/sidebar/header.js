/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default () => (
  <div className="sidebar-header">
    <h3><i className="fas fa-tachometer-alt" /><span>Doc</span>Sheet</h3>
    <div className="dropdown version">
      <a className="ver-drop dropdown-toggle" href="#" role="button" id="versionDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        v2.0.0
      </a>

      {/* <Version /> */}
      
    </div>
    <div className="form-group has-search">
      <span className="ti-search form-control-feedback" />
      <input type="text" className="form-control" placeholder="Search docs ..." />
    </div>
  </div>
)