import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Navbar = () => {
  return (
    <Typography color="primary.main">
      <Link style={{ marginRight: 50 }} color="primary" underline="hover">
        Home
      </Link>
      <Link style={{ marginRight: 50 }} color="primary" underline="hover">
        About
      </Link>
    </Typography>
  );
};

export default Navbar;
