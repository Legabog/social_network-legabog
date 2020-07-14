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
              Axios.put(
                `http://localhost:4000/musicalbums//update-album/5f06e3754da31a27f86836f4`,
                {
                  "tracks": [
                    {
                      "_id": "5f06e3754da31a27f86836f5",
                      "title": "Вторник",
                      "trackUrl": "https://firebasestorage.googleapis.com/v0/b/legabog-feedback-app.appspot.com/o/music-storage%2FSALUKI%2F%D0%9D%D0%B0%20%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0%2Fsaluki_%D0%B2%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%BA.mp3?alt=media"
                    },
                    {
                      "_id": "5f06e3754da31a27f86836f6",
                      "title": "Вкус Твоих Слёз",
                      "trackUrl": "https://firebasestorage.googleapis.com/v0/b/legabog-feedback-app.appspot.com/o/music-storage%2FSALUKI%2F%D0%9D%D0%B0%20%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0%2Fsaluki_%D0%B2%D0%BA%D1%83%D1%81_%D1%82%D0%B2%D0%BE%D0%B8%D1%85_%D1%81%D0%BB%D1%91%D0%B7.mp3?alt=media"
                    },
                    {
                      "_id": "5f06e3754da31a27f86836f7",
                      "title": "Кома",
                      "trackUrl": "https://firebasestorage.googleapis.com/v0/b/legabog-feedback-app.appspot.com/o/music-storage%2FSALUKI%2F%D0%9D%D0%B0%20%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0%2Fsaluki_%D0%BA%D0%BE%D0%BC%D0%B0.mp3?alt=media"
                    },
                    {
                      "_id": "5f06e3754da31a27f86836f8",
                      "title": "0,33",
                      "trackUrl": "https://firebasestorage.googleapis.com/v0/b/legabog-feedback-app.appspot.com/o/music-storage%2FSALUKI%2F%D0%9D%D0%B0%20%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0%2Fsaluki_0%2C33.mp3?alt=media"
                    },
                    {
                      "_id": "5f06e3754da31a27f86836f9",
                      "title": "На Человека",
                      "trackUrl": "https://firebasestorage.googleapis.com/v0/b/legabog-feedback-app.appspot.com/o/music-storage%2FSALUKI%2F%D0%9D%D0%B0%20%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0%2Fsaluki_%D0%BD%D0%B0_%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0.mp3?alt=media"
                    },
                    {
                      "_id": "5f06e3754da31a27f86836fa",
                      "title": "Лёд",
                      "trackUrl": "https://firebasestorage.googleapis.com/v0/b/legabog-feedback-app.appspot.com/o/music-storage%2FSALUKI%2F%D0%9D%D0%B0%20%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0%2Fsaluki_%D0%BB%D1%91%D0%B4.mp3?alt=media"
                    },
                    {
                      "_id": "5f06e3754da31a27f86836fb",
                      "title": "777",
                      "trackUrl": "https://firebasestorage.googleapis.com/v0/b/legabog-feedback-app.appspot.com/o/music-storage%2FSALUKI%2F%D0%9D%D0%B0%20%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0%2Fsaluki_777.mp3?alt=media"
                    }
                  ],
                }
              );
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
