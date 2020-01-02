import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Container maxWidth="lg">MAIN SITE</Container>
    </Container>
  );
}
