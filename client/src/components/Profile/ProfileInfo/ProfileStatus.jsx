import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  status = React.createRef()

  // onStatusChange = (e) => {
  //   this.setState({
  //     status: e.currentTarget.value
  //   })
  // }

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updatePostActionCreator(text);
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div className={classes.profileStatus}>
        {!this.state.editMode ? (
          <div>
            <span
              onClick={() => {
                this.setState({
                  editMode: true,
                });
              }}
            >
              {this.props.status || "---"}
            </span>
          </div>
        ) : (
          <div>
            <input
              ref={this.status}
              onChange={() => {
                let status = this.status.current.value;
                this.props.changeStatusHandler(status);
              }}
              autoFocus={true}
              value={this.props.status}
              onBlur={() => {
                this.setState({
                  editMode: false,
                });
                this.props.updateProfileStatus(this.props.status)
              }}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
