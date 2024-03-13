import React from "react";
import ProjectBtn from "../ProjectBtn";
import "./style.css";

function Project(props) {
  return (

    <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <ProjectBtn
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <ProjectBtn
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div>
  );
}

export default Project;
