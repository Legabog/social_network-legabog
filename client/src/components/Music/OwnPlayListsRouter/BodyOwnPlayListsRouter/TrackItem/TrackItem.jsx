import React from "react";
import classes from "./TrackItem.module.css";

const TracksItem = (props) => {
  return (
    <div className={classes.tracks}>
      <div className={classes.item}>
        <div className={classes.description}>
          <div className={classes.titleAndAuthor}>
            <h6 onClick={() => {
              window.open(`${props.trackUrl}`, "_blank")
            }}>{props.title}</h6>
            <p>{props.author}</p>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default TracksItem;
