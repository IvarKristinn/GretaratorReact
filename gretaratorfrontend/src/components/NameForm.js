import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import gretarator from "../apis/gretarnator";

/*
The Forms render, but i need the user data and 
post it too the API, so prop somekind 


*/



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
      //this.setState({ clicked: true });
      console.log(this.nickRef.value, this.authorRef.value, this.descriptionRef.value);
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
      <form className={classes.root}>
          <div>
            <TextField
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
            />
          </div>
          <div>
            <TextField
              autoFocus
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
              autoFocus
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
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                //this.postNewNick();
                this.buttonClick();
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