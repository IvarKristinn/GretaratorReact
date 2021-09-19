import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import gretarator from "../apis/gretarnator";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: "800px",
    backgroundColor: "#63788a"
  }
});

class NameForm extends React.Component {
  state = {
    nickname: ""
  };

  // Nickname needed to be in state so the renderUploadButton works as it should
  // Etc nickname is required, and user should no be able to post to the server unless its filled
  handleChange = event => {
    this.setState({nickname: event.target.value});
  };

  postNewNick = async () => {

    const body = {
      nickname: this.nickRef.value,
      author: this.authorRef.value,
      description: this.descriptionRef.value
    };

    console.log(this.nickRef.value, this.authorRef.value, this.descriptionRef.value);
    const response = await gretarator.post("/api/nicknames", body);

    // Clear textfield and reset state
    setTimeout(() => {
      this.nickRef.value = "";
      this.authorRef.value = "";
      this.descriptionRef.value = "";
      this.setState({
        nickname: ""
      });
    }, 100);
  };

  renderUploadButton() {
    if(this.state.nickname) {
      return [
        <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={() => {
          this.postNewNick();
        }}
        startIcon={<CloudUploadIcon />}
      >
        Post new nick
      </Button>
      ];
    } else {
      return [
        <Button variant="contained" size="large" disabled>
          Nickname is required
        </Button>
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
    <h2>Do you wanna be part of the nickname gang ?</h2>
    <div>
      <p style={{ fontSize: "20px" }}>
        Look no further! Here you can be part of the Gretarator project. <br />
        Simply fill out the form and watch the magic happen. <br />
        P.S. the Nickname field is required, rest is optional.
      </p>
      </div>
    <form className={classes.root}>
      <div>
        <TextField
            value = {this.state.nickname}
            autoFocus
            margin="normal"
            id="nickname"
            label="Nickname"
            type="text"
            style={{ margin: 10, width: "520px" }}
            InputProps={{
              style: {
                textAlign: "center"
              }
            }}
            inputRef={ref => {
              this.nickRef = ref;
            }}
            onChange={this.handleChange}
          />
      </div>
      <div>
          <TextField
            margin="normal"
            id="author"
            label="Author"
            type="text"
            style={{ margin: 10, width: "520px" }}
            InputProps={{
              style: {
                textAlign: "center"
              }
            }}
            inputRef={ref => {
              this.authorRef = ref;
            }}
          />
      </div>
      <div>
          <TextField
            margin="normal"
            id="description"
            label="Description"
            type="text"
            style={{ margin: 10, width: "520px" }}
            InputProps={{
              style: {
                textAlign: "center"
              }
            }}
            inputRef={ref => {
              this.descriptionRef = ref;
            }}
          />
      </div>
    </form>
        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            marginBottom: "25px"
          }}
        >
          {this.renderUploadButton()}
        </div>
      </div>
    );
  }
}
  
  export default withStyles(useStyles)(NameForm);