import React, { useState, useEffect } from "react";
import { FaBook, FaBookOpen } from "react-icons/fa";
import { Collapse, StyledName, VerticalLine } from '../styles'
import { StyledFolder } from "./styles";
import { useTreeContext } from "../state/TreeContext";

const FolderName = ({ isOpen, name, handleClick }) => (
  <StyledName onClick={handleClick}>
    {isOpen ? <FaBookOpen /> : <FaBook />}
    &nbsp;&nbsp;{name}
  </StyledName>
);

const Folder = ({ id, name, children, node }) => {
  const { onNodeClick } = useTreeContext();
  const [isOpen, setIsOpen] = useState(false);
  const [childs, setChilds] = useState([]);

  useEffect(() => {
    setChilds([children]);
  }, [children]);

  const handleNodeClick = React.useCallback(
    (event) => {
      event.stopPropagation()
      onNodeClick({ node })
    },
    [node]
  );

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <StyledFolder id={id} onClick={handleNodeClick} className="tree__folder">
      <VerticalLine>
        <FolderName name={name} isOpen={isOpen} handleClick={handleClick} />
        <Collapse className="tree__folder--collapsible" isOpen={isOpen}>
          {childs}
        </Collapse>
      </VerticalLine>
    </StyledFolder>
  );
};

export { Folder, FolderName };
