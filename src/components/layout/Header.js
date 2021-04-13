import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    background: "white",
  },
  title: {
    color: "rgb(252, 143, 90)",
  },
});

export default function Header(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
}
