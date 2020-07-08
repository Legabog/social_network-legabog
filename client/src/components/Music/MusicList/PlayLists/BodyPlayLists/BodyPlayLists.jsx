import React from "react";
import classes from "./BodyPlayLists.module.css";
import PhotoAdd from "../../../../../assets/apple theme/playlist_add.jpg";
import { NavLink } from "react-router-dom";
import PlayList from "../PlayList/PlayList";

const BodyPlayLists = (props) => {
  console.log(props.ownPlayLists)

  return (
    <div className={classes.bodyPlayLists}>
      {props.playListSwitcher ? null : (
        <NavLink to="/music-list/playlists/create">
          <div className={classes.createPlayList}>
            <img src={PhotoAdd} alt="descripion" />
            <h3>Create new playlist</h3>
          </div>
          <hr />
        </NavLink>
      )}

      {props.ownPlayLists.map((e) => (
        <PlayList
          key={Math.random()}
          img={e.playlistcoverUrl}
          name={e.title}
          description={e.description}
          playListSwitcher={props.playListSwitcher}
          addTrackToPlayList={props.addTrackToPlayList}
        />
      ))}
      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default BodyPlayLists;
