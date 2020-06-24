import React from "react";
import classes from "./FriendsList.module.css";
import FriendsListItem from "../FriendListItem/FriendsListItem";
import {
  getFriends,
  setTotalUsersCountThunk,
} from "../../../redux/friendslist-reducer";
import { connect } from "react-redux";
import DefaultPhoto from "../../../assets/images/user.png";
// import Pagination from "@material-ui/lab/Pagination";
// import store from "../../../redux/redux-store";

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.setTotalUsersCountThunk();
    let i = 1;
    while (i <= Math.ceil(3575 / 100)) {
      this.props.getFriends(i, 100);
      console.log(i);
      i++;
    }
  }

  render() {
    return (
      <div className={classes.friendslist}>
        <h3>Followed:</h3>
        <div>
          {this.props.friends.map((e) => (
            <FriendsListItem
              key={e.id}
              name={e.name}
              imgpath={e.photos.small || DefaultPhoto}
            />
          ))}
        </div>
      </div>

      // <div className={classes.userslider}>
      //     <div className={classes.root}>
      //       <Pagination
      //        color="primary"
      //         count={Math.ceil(
      //          this.props.totalUsersCount / this.props.pageSize
      //       )}
      //       onChange={(e, page) => {
      //          this.props.getFriends(page);
      //       }}
      //       />
      //     </div>
      //    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalUsersCount: state.friendslistReducer.totalUsersCount,
    pageSize: state.friendslistReducer.pageSize,
    friends: state.friendslistReducer.friends,
  };
};

export default connect(mapStateToProps, {
  getFriends,
  setTotalUsersCountThunk,
})(FriendsList);
