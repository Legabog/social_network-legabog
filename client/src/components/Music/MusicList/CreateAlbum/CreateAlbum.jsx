import React from "react";
import classes from "./CreateAlbum.module.css";
import HeaderCreateAlbum from "./HeaderCreateAlbum/HeaderCreateAlbum";

const CreateAlbum = (props) => {
  return (
    <div className={classes.createAlbum}>
      <HeaderCreateAlbum addToPlayList={props.addToPlayList}/>
    </div>
  );
};


export default CreateAlbum;
