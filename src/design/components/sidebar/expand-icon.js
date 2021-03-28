import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const isArray = (children) => (Array.isArray(children) && children.length)

const icon = (collapsed) => (
  !collapsed
    ? (<ExpandLessIcon className="sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded" />)
    : (<ExpandMoreIcon className="sidebar-item-expand-arrow" />)
)

export default function ExpandIcon({ collapsed, childs }) {
  return ((isArray(childs)) ? (icon(collapsed)) : null)
}