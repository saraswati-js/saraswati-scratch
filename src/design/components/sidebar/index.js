import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import content from '@saraswati-cache/sidebar.json'
import SidebarItem from './item'

function Sidebar({ items = content, depthStep, depth, expanded }) {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <List disablePadding dense>
        <div className="list-group list-group-flush">
          {items.map((sidebarItem, index) => (
            <React.Fragment key={`${sidebarItem.name}${index}`}>
              {sidebarItem === "divider" ? (<Divider style={{ margin: "6px 0" }} />) : (
                <SidebarItem
                  depthStep={depthStep}
                  depth={depth}
                  expanded={expanded}
                  item={sidebarItem}
                />
              )}
            </React.Fragment>
        ))}
        </div>
      </List>
    </div>
  );
}

export default Sidebar;

{/* <div className="list-group-item list-group-item-action bg-light"></div> */ }