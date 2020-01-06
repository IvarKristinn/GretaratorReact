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
  return (
    <div
      className={classes.root}
      style={{
        textAlign: "center",
        marginTop: "25px"
      }}
    >
      <h2>About Gretarator</h2>
      <p>
        This project is an love poem to our friend Grétar Örn <br />
      </p>
    </div>
  );
};

export default About;
