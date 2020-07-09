import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import classes from "./SimpleMenu.module.css"
import { NavLink } from "react-router-dom";

export const SimpleMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.SimpleMenu}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{textTransform: "none", color: "#fff" , transition: "none || none", }}
      >
        <div className={classes.loginblock}>
          <Avatar
            size={32}
            icon={<UserOutlined />}
            style={{ marginTop: "25px"}}
          />
          <p>
            <strong>{props.login}</strong>
          </p>
          <i className="fas fa-caret-down"></i>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {}}><NavLink style={{color: "#4A76A8"}} to={"/profile/"}>My profile</NavLink></MenuItem>
        <MenuItem onClick={() => {}}><NavLink style={{color: "#4A76A8"}} to={"/music"}>Music</NavLink></MenuItem>
        <MenuItem onClick={() => {}}><NavLink style={{color: "#4A76A8"}} to={"/settings"}>Settings</NavLink></MenuItem>
        <MenuItem onClick={() => {props.logout()}} ><NavLink style={{color: "#4A76A8"}} to={"/login"}>Logout</NavLink></MenuItem>
      </Menu>
    </div>
  );
};
