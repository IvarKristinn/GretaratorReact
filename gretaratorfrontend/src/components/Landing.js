import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "800px"
  }
}));
// nickname
// description
// button to get new random nick
//class AdminView extends React.Component
class Landing extends React.Component {
  render() {
    const classes = useStyles();
    return <div className={classes.root}>MAIN SITE</div>;
  }
}

export default Landing;
