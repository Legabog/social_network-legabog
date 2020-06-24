import React from "react";
import classes from "./PlayLists.module.css";
import HeaderPlayLists from "./HeaderPlayLists/HeaderPlayLists";
import BodyPlayLists from "./BodyPlayLists/BodyPlayLists";
import { connect } from "react-redux";
import { addTrackToPlayList, switchStateOfPlayLists } from "../../../../redux/musicalplaylists-reducer"

const PlayLists = (props) => {
  return (
    <div className={classes.playLists}>
      <HeaderPlayLists switchStateOfPlayLists={props.switchStateOfPlayLists} />
      <BodyPlayLists {...props} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
    playListSwitcher: state.musicPlayListReducer.playListSwitcher
  };
};

export default connect(mapStateToProps, {
  addTrackToPlayList,
  switchStateOfPlayLists
})(PlayLists);
