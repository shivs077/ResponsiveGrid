import React, { useState } from "react";
import { Box, Heading, RadioButtonGroup, Text } from "grommet";
import styled from "styled-components";

import ResponsiveGrid, { GridItem } from "../ResponsiveGrid";
const SRadioButtonGroup = styled(RadioButtonGroup)`
  > label {
    padding: 5px 20px;
  }
`;

const SpacingExample = () => {
  const [spacing, setSpacing] = useState(3);

  return (
    <Box gap="medium" margin={{ vertical: "large", horizontal: "xsmall" }}>
      <Box gap="medium" margin={{ horizontal: "small" }}>
        <Heading level={3}>Spacing</Heading>
        <Text>
          ResponsiveGrid follows an <strong>8px</strong> square baseline grid
          i.e. if <strong>spacing={`{3}`}</strong> is provided, the gap (both
          vertical and horizontal) between the grid items would be{" "}
          <strong>8 * 3 = 24px</strong>. Tinker with the example below to see it
          in action:
        </Text>
      </Box>
      <Box
        gap="medium"
        justify="between"
        pad="small"
        background="light-3"
        elevation="small"
      >
        <ResponsiveGrid spacing={spacing}>
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
        <SRadioButtonGroup
          name="spacing"
          value={spacing}
          direction="row"
          wrap
          gap="none"
          onChange={(e) => setSpacing(+e.target.value)}
          options={Array(10)
            .fill()
            .map((_, i) => ({
              value: i,
              label: `${i}`
            }))}
        />
      </Box>
    </Box>
  );
};

export default SpacingExample;
