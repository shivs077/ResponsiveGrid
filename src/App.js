import React from "react";
import "./styles.css";
import { Box, Grommet } from "grommet";
import Example from "./Examples";
import Background from "./Background";

export default function App() {
  return (
    <Grommet full>
      <Box style={{ position: "relative" }} flex height={{ min: "100%" }}>
        <Example />
        <Background />
      </Box>
    </Grommet>
  );
}
