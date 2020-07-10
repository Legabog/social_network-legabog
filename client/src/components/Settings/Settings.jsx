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
              Axios.put(`http://localhost:4000/musicalbums//update-album/5ed8c632b939c242b024f4bc`, {
                albumcoverUrl: "https://avatars.yandex.net/get-music-content/2808981/865b055d.a.10258179-1/200x200"
              })
            }}
          >
            business
          </button>
          <button
            className={classes.categoriesbuttons}
            onClick={() => {
              Axios.post(
                "http://localhost:4000/myownplaylists/create-playlist",
                {
                  title: "Playlist 1",
                  description: "Its my first Album",

                  playlistcoverUrl:
                    "https://drive.google.com/file/d/1W_Zf-QkGIU1n8Ffvk4yN60jE2BAyH-aR/view?usp=sharing",

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
                }
              );
            }}
          >
            entertainment
          </button>
          <button
            className={classes.categoriesbuttons}
            onClick={() => {
              userAPI.deleteOwnPlayList("5ef9c92c3c9d7d4588c1bef2");
            }}
          >
            health
          </button>
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
