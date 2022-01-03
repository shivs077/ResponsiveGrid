import React, { useState, useRef } from "react";
import { Box, Heading, Text } from "grommet";

import ResponsiveGrid, { GridItem } from "../ResponsiveGrid";

const TargetParentDiv = () => {
  const [collapsed, setCollapsed] = useState(true);
  const ref = useRef();
  return (
    <Box gap="medium" margin={{ vertical: "large", horizontal: "xsmall" }}>
      <Box gap="medium" margin={{ horizontal: "small" }}>
        <Heading level={3}>Target Container</Heading>
        <Text>
          One of the shortcoming of media queries is that it cannot be used to
          target any other element beside the document body. This becomes
          complicated when you need to reposition/resize child nodes based on the
          dynamic changes to the width of the parent node.
          <br />
          ResponsiveGrid provides a prop <b>target</b> which if passed the{" "}
          <b>ref</b> to the parent container solves the above mentioned issue.
          Try clicking on the sidebar below to expand it and see how breakpoint
          changes occur with respect to the parent node while the window size
          is unchanged, unlike in the above example:
        </Text>
      </Box>
      <Box
        direction="row"
        justify="between"
        background="light-3"
        elevation="small"
      >
        <Box
          ref={ref}
          flex
          alignSelf="center"
          // height="medium"
          pad="small"
        >
          <ResponsiveGrid
            target={ref}
            spacing={3}
            // breakpoints={{ xs:0, sm:480px, md:768px, lg:1280px, xl:1440px }}
          >
            <GridItem xs={12}>
              <Box background="white" pad="small" align="center" border>
                xs=12
              </Box>
            </GridItem>
            <GridItem sm={6} xs={12}>
              <Box background="white" pad="small" align="center" border>
                xs=12, sm=6
              </Box>
            </GridItem>
            <GridItem sm={6} xs={12}>
              <Box background="white" pad="small" align="center" border>
                xs=12, sm=6
              </Box>
            </GridItem>
            <GridItem xs={6} sm={3}>
              <Box background="white" pad="small" align="center" border>
                xs=6, sm=3
              </Box>
            </GridItem>
            <GridItem xs={6} sm={3}>
              <Box background="white" pad="small" align="center" border>
                xs=6, sm=3
              </Box>
            </GridItem>
            <GridItem xs={6} sm={3}>
              <Box background="white" pad="small" align="center" border>
                xs=6, sm=3
              </Box>
            </GridItem>
            <GridItem xs={6} sm={3}>
              <Box background="white" pad="small" align="center" border>
                xs=6, sm=3
              </Box>
            </GridItem>
          </ResponsiveGrid>
        </Box>
        <Box
          background="dark-4"
          width={collapsed ? "48px" : "50%"}
          onClick={() => setCollapsed((prev) => !prev)}
          // flex
          // height="medium"
          justify="center"
          align="center"
        >
          <Text
            alignSelf="center"
            textAlign="center"
            style={{ writingMode: "vertical-lr" }}
          >
            Sidebar
          </Text>
        </Box>
      </Box>
      <Box margin={{ horizontal: "small" }}>
        <Text>
          <b>Note: The target ref should be a flexbox container.</b>
        </Text>
      </Box>
    </Box>
  );
};

export default TargetParentDiv;
