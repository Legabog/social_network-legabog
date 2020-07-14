import React from "react";
import classes from "./FooterMusicList.module.css";
import FooterItem from "./FooterItem/FooterItem";
import { userAPI } from "../../../../api/api";


const FooterMusicList = (props) => {
  return (
    <div className={classes.footerMusicList}>
      <h1 onClick={() => {
        userAPI.deleteTrack("5f0dc8293a3e91415893f089")
      }}>Recently played: </h1>
      {props.recentlyPlayed.map((e) => (
        <FooterItem
          key={Math.random()}
          img={e.img}
          title={e.title}
          author={e.author}
          toggleSwitcher={props.toggleSwitcher}
        />
      ))}
      <div className={classes.lastBlock}></div>
    </div>
  );
};

export default FooterMusicList;
