import React from "react";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: "800px"
  }
});
// nickname
// description
// button to get new random nick
class Landing extends React.Component {
  render() {
    const classes = this.props;
    return <div className={classes.root}>MAIN SITE</div>;
  }
}

export default withStyles(useStyles)(Landing);
