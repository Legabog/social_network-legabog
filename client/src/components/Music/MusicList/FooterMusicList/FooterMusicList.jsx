import React from "react";
import classes from "./FooterMusicList.module.css";
import FooterItem from "./FooterItem/FooterItem";


const FooterMusicList = (props) => {
  return (
    <div className={classes.footerMusicList}>
      <h1>Recently played: </h1>
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
