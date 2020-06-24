import React from "react";
import classes from "./FlagOfCountry.module.css";

const FlagOfCountry = (props) => {
  return (
    <div className={classes.rootCountry}>
      <img
        src={props.img}
        alt={props.title}
      ></img>
      <div className={classes.titleCountry}>
        <p>{props.title}</p>
        <div className={classes.idCountry}>
          <kbd>{props.id}</kbd>
          <input type="checkbox" className={classes.inputChoose} /> 
        </div>
      </div>
    </div>
  );
};

export default FlagOfCountry;
