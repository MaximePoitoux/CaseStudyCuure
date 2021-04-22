import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCards from "../cards/ProductCards";
import Container from "@material-ui/core/Container";
import Header from "../layout/Header";
import GridList from "@material-ui/core/GridList";
import Footer from "../layout/Footer";

import { specialitiesData } from "../../data/specialitiesData";

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

export default function SpecialitiesPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="false">
      <Header title="Les Spécialités" />
      <GridList className={classes.gridList}>
        {specialitiesData.map((specialities) => (
          <ProductCards products={specialities} key={specialities.title} />
        ))}
      </GridList>
      <Footer />
    </Container>
  );
}
