import React, { useState } from "react";
import { AiOutlineFile } from "react-icons/ai";
import { StyledFile } from "./styles";
import { useTreeContext } from "../state/TreeContext";
import { StyledName } from "../styles.js";
import { Link } from 'components/Router'

const File = ({ name, node }) => {
  const { onNodeClick } = useTreeContext();
  const [clicked, setClicked] = useState(false)
  const blogNum = Math.floor(Math.random() * 100) + 1  

  // let splitted = name?.split(".");
  // const ext = splitted[splitted.length - 1]

  const handleNodeClick = React.useCallback(
    (e) => {
      e.stopPropagation()
      onNodeClick({ node, isActive: true })
      setClicked(!clicked)
    },
    [node]
  );

  return (
    <StyledFile active={clicked} onClick={handleNodeClick} className="tree__file">
      <StyledName>
        <AiOutlineFile />
        {/* &nbsp;&nbsp;{name} */}
        <Link className="nav-link" to={`/blog/post/${blogNum}/`}>{name}</Link>
      </StyledName>
    </StyledFile>
  );
};

export { File };
