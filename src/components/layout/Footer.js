import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  wrapper: {
    height: "30px",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 0",
  },
  navLink: {
    padding: "10px",
    margin: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
  },
  active: {
    background: "black",
    fontWeight: "bold",
    opacity: "0.5",
    borderRadius: "50%",
    height: "10px",
    width: "10px",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <NavLink
        activeClassName={classes.active}
        className={classes.navLink}
        to="/vitamins"
      >
        1
      </NavLink>
      <NavLink
        activeClassName={classes.active}
        className={classes.navLink}
        to="/minerals"
      >
        2
      </NavLink>
      <NavLink
        activeClassName={classes.active}
        className={classes.navLink}
        to="/plants"
      >
        3
      </NavLink>
      <NavLink
        activeClassName={classes.active}
        className={classes.navLink}
        to="/specialities"
      >
        4
      </NavLink>
    </div>
  );
}
