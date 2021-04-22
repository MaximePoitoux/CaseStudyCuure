import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { CardMedia } from "@material-ui/core";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "380px",
    width: "300px",
    overflow: "scroll",
  },
  wrapperImg: {
    height: "100px",
    width: "100px",
    display: "flex",
  },
  borderImg: {
    border: "solid 2px white",
    borderRadius: "4px",
  },
  desc: {
    fontSize: "16px",
  },
}));

export default function ProductModal(props) {
  const classes = useStyles();
  const { products, handleClose, openModal } = props;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <div
          className={classes.paper}
          style={{ backgroundColor: products.color }}
        >
          <div className={classes.wrapperImg}>
            <CardMedia
              className={classes.borderImg}
              component="img"
              alt={products.title}
              image={products.image}
              title={products.title}
            />
          </div>
          <h2 id="transition-modal-title">{products.title}</h2>
          <p className={classes.desc} id="transition-modal-description">
            {products.desc}
          </p>
        </div>
      </Fade>
    </Modal>
  );
}
