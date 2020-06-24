import React from "react";
import classes from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div
      className={classes.dialogsItems + " " + classes.active}
      onClick={() =>
        axios.post("/musicalbums/create-musicalbum", {
          title: "Tsukuyomi Dream",
          author: "ROCKET",
          albumcoverUrl:
            "https://i0.wp.com/images.shazam.com/coverart/t487298891-i1474977594_s400.jpg",
          tracks: [
            {
              title: "Infinite Tsukuyomi",
              trackUrl: "No url",
            },
            {
              title: "LUV",
              trackUrl: "No url",
            },
            {
              title: "Money",
              trackUrl: "No url",
            }
          ],
        })
      }
    >
      <img src={props.imgpath} alt="description" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
