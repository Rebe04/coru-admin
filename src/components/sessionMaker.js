import React, { useEffect, useState } from "react";
import SessionMakerItemMenu from "./sessionMakerItemMenu";

class TreeNode {
  /**
   * a data class to define the tree node data
   * @param {Integer} parent
   * @param {Array} childs
   */
  constructor(parent, childs = []) {
    this.id = Math.round(Math.random() * 1000);
    this.parent = parent;
    this.childs = childs;
  }
}

function SessionMaker(props) {
  const [tree, setTree] = useState(new TreeNode("none"));

  const add = (node) => {
    node.childs.push(new TreeNode(""));
    setTree({ ...tree });
  };

  const remove = (node) => {
    node.childs = [];
    setTree({ ...tree });
  };

  const renderTree = (tree) => {
    console.log(tree);
    return tree.childs.length > 0 ? (
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div
          style={{
            position: "relative",
            border: "solid",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#fff",
            margin: 15,
            padding: 15,
            display: "grid",
            justifyItems: "center",
          }}
          key={tree.id}
        >
          <div style={{ textAlign: "center" }}>
            <h6 style={{ color: "lightblue", fontWeight: "bold" }}>Question</h6>
            <p>19 min</p>
            <p>30 xp</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <div
              onClick={() => {
                remove(tree);
              }}
              style={{ cursor: "pointer" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="pink"
                class="bi bi-dash-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </div>
            <div
              onClick={() => {
                add(tree);
              }}
              style={{ cursor: "pointer", marginRight: 5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="lightgreen"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
          </div>
        </div>
        <div>{tree.childs.map((node) => renderTree(node))}</div>
      </div>
    ) : (
      <div
        className="hover:bg-black-500"
        style={styles.circle}
        onClick={() => {
          add(tree);
        }}
        key={tree.id}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </div>
    );
  };

  return (
    <div style={{ flex: 1 }}>
      <div style={{ flexDirection: "row", display: "flex" }}>
        {renderTree(tree)}
      </div>
    </div>
  );
}

const styles = {
  circle: {
    cursor: "pointer",
    border: "solid",
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "white",
    margin: 15,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
};

export default SessionMaker;
