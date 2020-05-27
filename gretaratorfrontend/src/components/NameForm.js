import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import gretarator from "../apis/gretarnator";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: "800px",
    backgroundColor: "#63788a"
  }
});

class NameForm extends React.Component {
    /*state = { nicknames: [], ranNick: [], clicked: false };
  
    componentWillMount() {
      this.getAllNicks();
    }
  */
    postNewNick = async () => {
      const response = await gretarator.post("/api/nicknames", {
          nickname: "Test",
          author: "Test",
          description: "Test"
      });
      console.log(response);
      this.setState({ nicknames: response.data });
    };
  
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
          FORM
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
                this.postNewNick();
              }}
              startIcon={<CloudUploadIcon />}
            >
              Post new nick
            </Button>
          </div>
        </div>
      );
    }
  }
  
  export default withStyles(useStyles)(NameForm);