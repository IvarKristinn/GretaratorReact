import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import gretarator from "../apis/gretarnator";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: "800px",
    backgroundColor: "#63788a"
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
    let nick = this.state.nicknames[
      Math.floor(Math.random() * this.state.nicknames.length)
    ];
    // setState with the new random nick
    this.setState({ ranNick: nick });
  }

  buttonClick() {
    this.setState({ clicked: true });
  }

  renderNick() {
    let orgNick = { nickname: "Grétar", description: "OG" };
    let randomNick = this.state.ranNick;
    if (this.state.clicked === false) {
      return [
        <div
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginTop: "10px",
            marginBottom: "10px",
            minHeight: "50px",
            maxHeight: "60px",
            display: "block",
            overflow: "hidden"
          }}
        >
          {orgNick.nickname}
        </div>,
        <div
          style={{
            textAlign: "center",
            fontSize: "35px",
            marginTop: "10px",
            marginBottom: "10px",
            minHeight: "50px",
            maxHeight: "50px",
            display: "block",
            overflow: "hidden"
          }}
        >
          {orgNick.description}
        </div>
      ];
    } else {
      return [
        <div
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginTop: "10px",
            marginBottom: "10px",
            minHeight: "50px",
            maxHeight: "60px",
            display: "block",
            overflow: "hidden"
          }}
        >
          {randomNick.nickname}
        </div>,
        <div
          style={{
            textAlign: "center",
            fontSize: "35px",
            marginTop: "10px",
            marginBottom: "10px",
            minHeight: "50px",
            maxHeight: "50px",
            display: "block",
            overflow: "hidden"
          }}
        >
          {randomNick.description}
        </div>
      ];
    }
  }

  render() {
    const classes = this.props;
    return (
      <div
        className={classes.root}
        style={{
          textAlign: "center",
          marginTop: "25px",
          backgroundColor: "#63788a",
          height: "800px"
        }}
      >
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
