import React from "react";
import classes from "./Settings.module.css";
import FlagOfCountry from "../common/FlagOfCountry/FlagOfCountry";
import { userAPI } from "../../api/api";
import Axios from "axios";

const Settings = (props) => {
  return (
    <div className={classes.rootSettings}>
      <h1 className={classes.headerh1}>Account settings</h1>
      <div className={classes.themeSettings}>
        <h3>Theme Settings</h3>
      </div>
      <div className={classes.newsSettings}>
        <h3>News Settings</h3>
        <div className={classes.listOfCountries}>
          <h4>Choose Country</h4>
          {props.countries.map((e) => (
            <FlagOfCountry
              id={e.id}
              title={e.title}
              img={e.urlFlag}
              key={Math.random(1000000)}
            />
          ))}
        </div>
        <div className={classes.categoriesSettings}>
          <button
            className={classes.categoriesbuttons}
            onClick={() => {
              userAPI.deleteMusicAlbum("5ed8dd22b939c242b024f4e8");
            }}
          >
            business
          </button>
          <button
            className={classes.categoriesbuttons}
            onClick={() => {
              Axios.post("http://localhost:4000/myownplaylists/create-playlist", {
                title: "Playlist 1",
                description: "Its my first Album",

                playlistcoverUrl:
                  "https://pbs.twimg.com/media/BkG5LCmCcAAOL7P.jpg:large",

                tracks: [
                  {
                    title: "Track 1",

                    author: "Author 1",

                    trackUrl: "No url",
                  },
                  {
                    title: "Track 2",

                    author: "Author 2",

                    trackUrl: "No url",
                  },
                ],
              });
            }}
          >
            entertainment
          </button>
          <button className={classes.categoriesbuttons} onClick={() => {
            userAPI.deleteOwnPlayList("5ef891608439d640607749b8")
          }}>health</button>
          <button className={classes.categoriesbuttons}>science</button>
          <button className={classes.categoriesbuttons}>sports</button>
          <button className={classes.categoriesbuttons}>technology</button>
          <button className={classes.resultbutton}>Search News</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
