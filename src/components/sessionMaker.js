import React, { useEffect, useState } from "react";

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
            display: "flex",
            borderColor: "#fff",
            margin: 15,
            cursor: "pointer",
          }}
          onClick={() => {
            add(tree);
          }}
          key={tree.id}
        >
          <div
            onClick={() => remove(tree)}
            style={{ position: "absolute", right: 2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
          <div style={{ textAlign: "center", padding: 15 }}>
            <h6 style={{ color: "lightblue", fontWeight: "bold" }}>Question</h6>
            <p>19 min</p>
            <p>30 xp</p>
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
