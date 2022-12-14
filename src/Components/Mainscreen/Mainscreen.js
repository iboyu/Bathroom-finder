import React from "react";
import One from "../Subpages/One/One";
import Two from "../Subpages/Two/Two";
import Three from "../Subpages/Three/Three";
import Four from "../Subpages/Four/Four";
import "./Mainscreen.css"

function Mainscreen(props) {
  return (
    <div className="Mainscreen">
      {props.currentPage === "one" ? (
        <One />
      ) : props.currentPage === "two" ? (
        <Two />
      ) : props.currentPage === "three" ? (
        <Three />
      ) : props.currentPage === "four" ? (
        <Four />
      ) : (
        <One />
      )}
    </div>
  );
}

export default Mainscreen;
