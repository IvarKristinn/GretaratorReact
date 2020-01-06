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
        marginTop: "25px",
        backgroundColor: "#63788a"
      }}
    >
      <h1>About Gretarator Project</h1>
      <p>
        This project is an love poem to our friend Grétar Örn <br />
      </p>
    </div>
  );
};

export default About;
