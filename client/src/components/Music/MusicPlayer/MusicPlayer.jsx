import React from "react";
import classes from "./MusicPlayer.module.css";
import HeaderMusicPlayer from "./HeaderMusicPlayer/HeaderMusicPlayer";
import BodyMusicPlayer from "./BodyMusicPlayer/BodyMusicPlayer";
import { connect } from "react-redux";
import {
  toggleSwitcher,
  pushAlbumToRecentlyPlayed,
  pushToRecentlyPlayed,
  pushTitleToDisabledArray,
  pushAuthorToDisabledArray,
} from "../../../redux/musicalbums-reducer";

const MusicPlayer = (props) => {
  return (
    <div className={classes.musicPlayer}>
      <HeaderMusicPlayer
        nameArtist={props.nameArtist}
        switcher={props.musicAlbumsSwitcher}
        toggleSwitcher={props.toggleSwitcher}
      />
      <BodyMusicPlayer
        author={props.nameArtist}
        title={props.albumTitle}
        musicAlbums={props.musicAlbums}
        img={props.img}
        pushAlbumToRecentlyPlayed={props.pushAlbumToRecentlyPlayed}
        recentlyPlayed={props.recentlyPlayed}
        pushToRecentlyPlayed={props.pushToRecentlyPlayed}
        disabledTitles={props.disabledTitles}
        disabledAuthors={props.disabledAuthors}
        pushTitleToDisabledArray={props.pushTitleToDisabledArray}
        pushAuthorToDisabledArray={props.pushAuthorToDisabledArray}
        switchStateOfPlayLists={props.switchStateOfPlayLists}
        addTrackToPlayList={props.addTrackToPlayList}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
    disabledTitles: state.musicAlbumsReducer.disabledTitles,
    disabledAuthors: state.musicAlbumsReducer.disabledAuthors
  };
};

export default connect(mapStateToProps, {
  toggleSwitcher,
  pushAlbumToRecentlyPlayed,
  pushToRecentlyPlayed,
  pushTitleToDisabledArray,
  pushAuthorToDisabledArray,
})(MusicPlayer);
