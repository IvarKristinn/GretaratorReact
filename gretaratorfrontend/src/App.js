import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

export default function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Container maxWidth="lg">
        <Landing />
      </Container>
    </Container>
  );
}
