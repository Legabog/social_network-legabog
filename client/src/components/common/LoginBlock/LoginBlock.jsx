import React from "react";
import classes from "./LoginBlock.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { SimpleMenu } from "../SimpleMenu/SimpleMenu";


const LoginBlock = (props) => {
  return (
    <div className={classes.loginBlockMain}>
      {props.isAuth ? (
        <SimpleMenu {...props}/>
      ) : (
        <>
        <Redirect to={"/login"}/>
        <NavLink to={"login"}>
          <div className={classes.loginblock}>
            <Avatar
              size={32}
              icon={<UserOutlined />}
              style={{ marginTop: "10px" }}
            />
            <p>
              <strong>LOGIN</strong>
            </p>
          </div>
        </NavLink>
        </>
      )}
    </div>
  );
};

export default LoginBlock;
