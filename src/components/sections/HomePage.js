import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCards from "../cards/ProductCards";
import Container from "@material-ui/core/Container";
import Header from "../layout/Header";
import GridList from "@material-ui/core/GridList";
import Footer from "../layout/Footer";

import { vitaminsData } from "../../data/vitaminsData";

const useStyles = makeStyles({
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
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="false">
      <Header title="Les vitamines" />
      <GridList className={classes.gridList}>
        {vitaminsData.map((vitamins, index) => (
          <ProductCards products={vitamins} key={index} />
        ))}
      </GridList>
      <Footer />
    </Container>
  );
}
