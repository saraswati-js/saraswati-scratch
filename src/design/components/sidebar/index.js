import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import content from '@saraswati-cache/sidebar.json'
import SidebarItem from './item'

function Sidebar({ items = content, depthStep, depth, expanded }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
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
      </List>
    </div>
  );
}

export default Sidebar;
