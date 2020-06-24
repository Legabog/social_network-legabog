import React from "react";
import classes from "./BodyOwnPlayListsRouter.module.css";
import DefaultMusic from "../../../../assets/apple theme/music.jpg";
import TracksItem from "./TrackItem/TrackItem";

const BodyOwnPlayListsRouter = (props) => {
  console.log(props.tracks)
  return (
    <div className={classes.bodyOwnPlayListsRouter}>
      <div className={classes.playListImage}>
        <img src={props.img || DefaultMusic} alt="description" />
      </div>
      <div className={classes.playListTitle}>
        <h1>{props.title}</h1>
        <h4 onClick={() => props.AddTrack({title: "Qwe", author: "tri"})}>{props.description}</h4>
        <div className={classes.playListTracks}>
          {props.tracks.map((e) => (
            <TracksItem key={Math.random()} title={e.title} author={e.author} />
          ))}
        </div>
        <div className={classes.lastBlock}></div>
      </div>

      
    </div>
  );
};

export default BodyOwnPlayListsRouter;
