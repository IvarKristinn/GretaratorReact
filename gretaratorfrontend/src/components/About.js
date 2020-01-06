import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import pic1 from "../photos/GretarPic (4).png";
import pic2 from "../photos/GretarPic (6).png";
import pic3 from "../photos/GretarPic (8).png";
import pic4 from "../photos/GretarPic (14).png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "800px"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "330px"
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    maxWidth: 500
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
      <div>
        <h2>
          This project is an love poem to our friend and hero Grétar Örn
          <IconButton
            variant="contained"
            color="primary"
            size="large"
            target="facebook"
            href="http://www.facebook.com/gretarorn.hjartarson/"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            variant="contained"
            color="primary"
            size="large"
            target="instagram"
            href="http://www.instagram.com/gretarornhjartarson/"
          >
            <InstagramIcon />
          </IconButton>
          <br />
        </h2>
        <p style={{ fontSize: "20px" }}>
          We decided to make him immortal with this project, he has stood like a
          rock behind our backs in education and life. <br />
          He is always there if something is wrong. Always has something
          constructive to say on any occasion. <br />
          He is like a sunlight in a dark world. He is a leader, he shows us the
          way, he draws the best out of us. <br />
          <br />
          thanks for everything <br />
          Hjörtur Jóhann and Ívar Kristinn
          <br />
          Here you can find the link to Gretarator Open Api
          <IconButton
            variant="contained"
            color="primary"
            size="large"
            target="github"
            href="http://github.com/HjorturJ/Gretarator"
          >
            <GitHubIcon />
          </IconButton>
        </p>
      </div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img className={classes.img} src={pic1} alt="gretar1" />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img className={classes.img} src={pic2} alt="gretar2" />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img className={classes.img} src={pic3} alt="gretar3" />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <img className={classes.img} src={pic4} alt="gretar4" />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
