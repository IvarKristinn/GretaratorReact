import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "800px"
  }
}));
// About the project, needs maybe smaller container
const About = () => {
  const classes = useStyles();
  return <div className={classes.root}>ABOUT THE PROJECT</div>;
};

export default About;
