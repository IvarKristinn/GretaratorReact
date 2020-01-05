import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import { history } from "../helpers";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  links: {
    fontSize: 20,
    margin: "5px 5px 5px 5px",
    color: "white"
  }
}));

// vantar history push
// Home == landing
// About ==  about the project, etc

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              className={classes.links}
              underline="hover"
              onClick={() => history.push("/")}
            >
              Home
            </Link>
            <Link
              className={classes.links}
              underline="hover"
              onClick={() => history.push("/about")}
            >
              About
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
