import React, { useReducer, useLayoutEffect } from "react";
import { v4 } from "uuid";
import { ThemeProvider } from "styled-components";

import { useDidMountEffect } from "./utils";
import { TreeContext, reducer } from "./state";

import { StyledTree } from "./styles";
import { Folder } from "./Folder";
import { File } from "./File";

const Tree = ({ children, data, onNodeClick, onUpdate }) => {
  const [state, dispatch] = useReducer(reducer, data);
  const isImparative = data && !children;

  useLayoutEffect(() => {
    dispatch({ type: "SET_DATA", payload: data });
  }, [data]);

  useDidMountEffect(() => {
    onUpdate && onUpdate(state);
  }, [state]);


  return (
    <ThemeProvider theme={{ indent: 20 }}>
      <TreeContext.Provider
        value={{
          isImparative,
          state,
          dispatch,
          onNodeClick: (node) => {
            onNodeClick && onNodeClick(node);
          },
        }}
      >
        <StyledTree>
          <TreeRecusive data={state} parentNode={state} />
        </StyledTree>
      </TreeContext.Provider>
    </ThemeProvider>
  );
};

const TreeRecusive = ({ data, parentNode }) => (
  data.map((item) => {
    item.parentNode = parentNode

    if (!parentNode) {
      item.parentNode = data
    }

    if (!item.id) {
      item.id = v4()
    }

    if (item.type === "file") {
      return <File key={item.id} id={item.id} name={item.name} node={item} />;
    }

    if (item.type === "folder") {
      return (
        <Folder key={item.id} id={item.id} name={item.name} node={item}>
          <TreeRecusive parentNode={item} data={item.files} />
        </Folder>
      );
    }
  })
)

Tree.File = File;
Tree.Folder = Folder;

export default Tree;
