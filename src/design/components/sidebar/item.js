import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ExpandIcon from './expand-icon'

export default function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const [ collapsed, setCollapsed ] = React.useState(true);
  const { name, label, children, Icon, onClick: onClickProp } = item;

  const href = (item.children.length  === 0) ? item.metadata.href : ''

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(children)) {
      toggleCollapse();
    }

    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  return (
    <>
      <ListItem className="sidebar-item" onClick={onClick} button dense {...rest} >
        <div style={{ paddingLeft: depth * depthStep }} className="sidebar-item-content">
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
          <div className="sidebar-item-text">{label || name}</div>
        </div>
        <ExpandIcon childs={children} collapsed />
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(children) ? (
          <List disablePadding dense>
            {children.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === "divider" ? (<Divider style={{ margin: "6px 0" }} />) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  >{href}</SidebarItem>
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}