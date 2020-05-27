import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CopyrightIcon from "@material-ui/icons/Copyright";
import SvgIcon from "@material-ui/core/SvgIcon";

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

const Navbar = () => {
  const classes = useStyles();
  const noPointer = { cursor: "default" };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              style={noPointer}
              className={classes.links}
              underline="hover"
              onClick={() => history.push("/")}
            >
              Home
            </Link>
            <Link
              style={noPointer}
              className={classes.links}
              underline="hover"
              onClick={() => history.push("/about")}
            >
              About
            </Link>
            <Link
              style={noPointer}
              className={classes.links}
              underline="hover"
              onClick={() => history.push("/nicknames")}
            >
              Nicknames
            </Link>
          </Typography>
          <SvgIcon>
            <CopyrightIcon />
          </SvgIcon>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
