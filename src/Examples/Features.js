import React from "react";
import { Box, Image, Text } from "grommet";

import ExampleCode from "./ExampleCode.png";

const Features = () => {
  return (
    <Box margin={{ top: "medium", horizontal: "medium" }}>
      <Text weight="bold" size="large">
        Features:{" "}
      </Text>
      <ul style={{ paddingLeft: "20px", lineHeight: "28px" }}>
        <li>Combines the power of CSS Flexbox and JS Resize observer.</li>
        <li>Grid items' widths are set in percentages.</li>
        <li>Spacing is created using margins.</li>
        <li>
          Customizable grid breakpoints (defaults to xs, sm, md, lg, xl and
          xxl).
        </li>
        <li>
          <strong>No media queries used or required!!</strong>
        </li>
      </ul>
      <Box
        flex
        width={{ max: "800px" }}
        pad="medium"
        margin={{ top: "medium" }}
        alignSelf="center"
        gap="small"
      >
        <Image fit="contain" src={ExampleCode} fill="horizontal" />
        <Text textAlign="center" size="small">
          <em>An example code snippet</em>
        </Text>
      </Box>
    </Box>
  );
};

export default Features;
