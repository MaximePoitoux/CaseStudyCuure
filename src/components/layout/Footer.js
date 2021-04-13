import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  wrapper: {
    height: "30px",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    padding: "15px 0",
    // background: "white",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Pagination count={4} />
    </div>
  );
}
