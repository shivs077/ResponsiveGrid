import React from "react";
import { Anchor, Box, Heading, Image, ResponsiveContext, Text } from "grommet";

import TargetBody from "./TargetBody";
import TargetParentDiv from "./TargetParentDiv";
import SpacingExample from "./SpacingExample";
import Features from "./Features";

const Example = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      flex
      height={{ min: "100%" }}
      margin={{ horizontal: "auto" }}
      width={size === "small" ? "100%" : { max: "60%" }}
      background="#fcfcfcdc"
      elevation="medium"
      overflow={{ vertical: "auto", horizontal: "hidden" }}
      pad={{ horizontal: size === "small" ? "small" : "none" }}
    >
      <Box margin={{ top: "medium", horizontal: "medium" }}>
        <Heading level={2}>Responsive Grid</Heading>
        <Box direction="row-responsive" gap="xsmall">
          <Heading size="small" level={5}>
            Inspired from Material UI's Grid
          </Heading>
          <Anchor
            target="_blank"
            size="small"
            href="https://material-ui.com/components/grid/"
            label="(https://material-ui.com/components/grid/)"
          />
        </Box>
      </Box>
      <Features />
      <TargetBody />
      <TargetParentDiv />
      <SpacingExample />
    </Box>
  );
};
export default Example;
