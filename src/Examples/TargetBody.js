import React from "react";
import { Box, Heading, Text } from "grommet";

import ResponsiveGrid, { GridItem } from "../ResponsiveGrid";

const Card = ({ children }) => {
  return (
    <Box background="white" pad="small" align="center" border>
      {children}
    </Box>
  );
};

const TargetBody = () => {
  return (
    <Box gap="medium" margin={{ vertical: "large", horizontal: "xsmall" }}>
      <Box gap="medium" margin={{ horizontal: "small" }}>
        <Heading level={3}>Target Body</Heading>
        <Text>
          By default, ResponsiveGrid component targets the body element. What
          that means is that the breakpoints will take affect based on the width
          of the document body. This works exactly like media queries.
          <br />
          The default breakpoints are <b>xs</b> (0px and up), <b>sm</b> (480px
          and up), <b>md</b> (768px and up), <b>lg</b> (1080 and up), <b>xl</b>{" "}
          (1440px and up) and <b>xxl</b> (1920px and up). Any of these values
          can be replaced or new ones can be added with a prop{" "}
          <b>breakpoints</b> which accepts an object{" "}
          {`( breakpoints={ xs:0, sm:480, ... } )`}
          <br />
          Try resizing the window to see it in effect below:
        </Text>
      </Box>
      <Box
        direction="row"
        justify="between"
        background="light-3"
        pad="small"
        elevation="small"
      >
        <ResponsiveGrid spacing={3}>
          <GridItem xs={12}>
            <Card>xs=12</Card> {/* Custom component */}
          </GridItem>
          <GridItem sm={6} xs={12}>
            <Card>xs=12, sm=6</Card>
          </GridItem>
          <GridItem sm={6} xs={12}>
            <Card>xs=12, sm=6</Card>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <Card>xs=6, sm=3</Card>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <Card>xs=6, sm=3</Card>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <Card>xs=6, sm=3</Card>
          </GridItem>
          <GridItem xs={6} sm={3}>
            <Card>xs=6, sm=3</Card>
          </GridItem>
        </ResponsiveGrid>
      </Box>
    </Box>
  );
};

export default TargetBody;
