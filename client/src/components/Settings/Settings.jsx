import React from "react";
import classes from "./Settings.module.css";
import FlagOfCountry from "../common/FlagOfCountry/FlagOfCountry";
import { userAPI } from "../../api/api";

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
          <button className={classes.categoriesbuttons} onClick={() => {
            userAPI.deleteMusicAlbum("5ed8dd22b939c242b024f4e8")
          }}>business</button>
          <button className={classes.categoriesbuttons}>entertainment</button>
          <button className={classes.categoriesbuttons}>health</button>
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
