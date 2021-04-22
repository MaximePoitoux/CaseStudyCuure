import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCards from "../cards/ProductCards";
import Container from "@material-ui/core/Container";
import Header from "../layout/Header";
import GridList from "@material-ui/core/GridList";
import Footer from "../layout/Footer";

import { vitaminsData } from "../../data/vitaminsData";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    backgroundColor: "rgb(252, 143, 90)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
}));

export default function VitaminsPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="false">
      <Header title="Les Vitamines" />
      <GridList className={classes.gridList}>
        {vitaminsData.map((vitamins) => (
          <ProductCards products={vitamins} key={vitamins.title} />
        ))}
      </GridList>
      <Footer />
    </Container>
  );
}
