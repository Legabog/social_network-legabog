import React from "react";
import classes from "./PlayList.module.css";
import { NavLink } from "react-router-dom";

const PlayList = (props) => {
  return (
    <>
      {props.playListSwitcher ? (
        <div className={classes.playList} onClick={() => {}}>
          <img src={props.img} alt="description" />
          <div className={classes.description}>
            <h3>{props.name}</h3>
          </div>
          <i className="fas fa-chevron-right"></i>

          <hr />
        </div>
      ) : (
        <NavLink to={`/music-playlists/${props.name}/`}>
          <div className={classes.playList}>
            <img src={props.img} alt="description" />
            <div className={classes.description}>
              <h3>{props.name}</h3>
            </div>
            <i className="fas fa-chevron-right"></i>
            <hr />
          </div>
        </NavLink>
      )}
    </>
  );
};

export default PlayList;
