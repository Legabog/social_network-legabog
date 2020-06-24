import React from "react";
import classes from "./Notify.module.css";

const Notify = (props) => {
  return (
    <div className={classes.notify}>
      <i
        className="fas fa-bell"
        style={{ fontSize: "160%", marginTop: "20px", marginLeft: "50px" }}
        onClick={() => {
          
        }}
      ></i>
    </div>
  );
};

export default Notify;
