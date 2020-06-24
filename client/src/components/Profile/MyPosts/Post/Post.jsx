import React from "react";
import classes from "./Post.module.css";

class Post extends React.Component {
  state = {
    likes: 0,
  };

  likeHandler() {
    this.setState({
      likes: this.state.likes + 1,
    });
  }

  render() {
    return (
      <div className={classes.item}>
        <div className={classes.description}>
          <img src="https://s01.geekpic.net/di-JX2ZZP.jpeg" alt="description" />
          <h6>legabog</h6>
        </div>

        <div className={classes.likes}>
          <h4>{this.props.message}</h4>
          <div className={classes.likesCount}>
            <i
              className="fas fa-heart"
              onClick={() => {
                this.likeHandler();
              }}
            ></i>
            <span>
              <strong> {this.state.likes}</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
