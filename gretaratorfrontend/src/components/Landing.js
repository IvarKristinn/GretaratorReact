import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import gretarator from "../apis/gretarnator";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: "800px"
  }
});

class Landing extends React.Component {
  state = { nicknames: [], ranNick: [], clicked: false };

  componentWillMount() {
    this.getAllNicks();
  }

  getAllNicks = async () => {
    const response = await gretarator.get("/api/nicknames");
    console.log(response);
    this.setState({ nicknames: response.data });
  };

  onNewNick() {
    //console.log("NEWNICK");
    let nick = this.state.nicknames[
      Math.floor(Math.random() * this.state.nicknames.length)
    ];
    //console.log(nick.nickname);
    // setState with the new random nick
    this.setState({ ranNick: nick });
  }

  buttonClick() {
    this.setState({ clicked: true });
  }

  renderNick() {
    let orgNick = { nickname: "Grétar", description: "OG" };
    let randomNick = this.state.ranNick;
    //console.log(randomNick);
    if (this.state.clicked == false) {
      //console.log("USER HAS NOT CLICKED");
      return [
        <div
          style={{
            textAlign: "center",
            fontSize: "35px",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          {orgNick.nickname}
        </div>,
        <div
          style={{
            textAlign: "center",
            fontSize: "35px",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          {orgNick.description}
        </div>
      ];
    } else {
      //console.log("RANDOM");
      return [
        <div
          style={{
            textAlign: "center",
            fontSize: "35px",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          {randomNick.nickname}
        </div>,
        <div
          style={{
            textAlign: "center",
            fontSize: "35px",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          {randomNick.description}
        </div>
      ];
    }
  }
  //this.onNewNick.nick.nickname
  //var newNick = this.onNewNick();
  render() {
    const classes = this.props;
    //console.log(this.onNewNick.nick);

    return (
      <div className={classes.root}>
        {this.renderNick()}
        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            marginBottom: "25px"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              this.buttonClick();
              this.renderNick();
              this.onNewNick();
            }}
          >
            Random Nickname!
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Landing);
