import React from "react";
import classes from "./OwnPlayListsRouter.module.css";
import HeaderOwnPlayListsRouter from "./HeaderOwnPlayListsRouter/HeaderOwnPlayListsRouter";
import BodyOwnPlayListsRouter from "./BodyOwnPlayListsRouter/BodyOwnPlayListsRouter";


class OwnPlayListsRouter extends React.Component {

  state = {
    tracks: []
  }

  AddTrack = (track) => {
    let joined = this.state.tracks.concat(track)
    this.setState({tracks: joined})
  }


  render() {
  return (
    <div className={classes.ownPlayListsRouter}>
      <HeaderOwnPlayListsRouter />
      <BodyOwnPlayListsRouter
        img={this.props.img}
        title={this.props.title}
        description={this.props.description}
        tracks={this.state.tracks}
        AddTrack={this.AddTrack}
      />
    </div>
  );
  }
};

export default OwnPlayListsRouter;
