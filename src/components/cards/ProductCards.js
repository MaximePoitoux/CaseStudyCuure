import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    height: "380px",
    minWidth: 265,
    backgroundColor: "rgb(36, 56, 70)",
    color: "white",
    margin: "10px",
  },
  contentCard: {
    color: "#bdc3c7",
  },
  paddingUl: {
    padding: "0 0 0 14px",
  },
  marginLi: {
    margin: "6px",
  },
});

export default function ProductsCards(props) {
  const classes = useStyles();
  const { products } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={products.title}
          height="140"
          image={products.image}
          title={products.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {products.title}
          </Typography>
          <Typography
            className={classes.contentCard}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <ul className={classes.paddingUl}>
              {products.desc.map((product) => (
                <li className={classes.marginLi}>{product.property}</li>
              ))}
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
