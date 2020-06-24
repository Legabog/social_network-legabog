import React from "react";
import classes from "./SliderItem.module.css";

class SliderItem extends React.Component {
  state = {
    likes: 0,
  };

  likesHandler() {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() {
    return (
      <div className={classes.mainSlider} key={this.props.id}>
        <img src={this.props.src} alt="description" />
        <i
          className="fas fa-heart"
          onClick={() => {
            this.likesHandler();
          }}
        >
          <span>
            <strong> {this.state.likes}</strong>
          </span>
        </i>
      </div>
    );
  }
}

export default SliderItem;
