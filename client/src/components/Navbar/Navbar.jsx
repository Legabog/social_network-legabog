import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// import FriendsList from "./FriendsList/FriendsList";
// import store from "../../redux/redux-store";

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.list}>
        <li>
          <div className={`${classes.item} ${classes.active}`}>
            <i className="fas fa-user"></i>
            <NavLink to="/profile" activeClassName={classes.active}>
              <span>Profile</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <i className="far fa-comments"></i>
            <NavLink to="/dialogs" activeClassName={classes.active}>
              <span>Messages</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <i className="fas fa-rss"></i>
            <NavLink to="/news" activeClassName={classes.active}>
              <span>News</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <i className="fas fa-music"></i>
            <NavLink to="/music" activeClassName={classes.active}>
              <span>Music</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <i className="fas fa-cog"></i>
            <NavLink to="/settings" activeClassName={classes.active}>
              <span>Settings</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <i className="fas fa-users"></i>
            <NavLink to="/users" activeClassName={classes.active}>
              <span>Users</span>
            </NavLink>
          </div>
        </li>
      </div>

      {/* <FriendsList state={store.getState().navbarReducer} /> */}
    </nav>
  );
};

export default Navbar;
