import styled from "styled-components";
import { Box } from "grommet";

export const Container = styled(Box)`
  margin: ${({ spacing }) => `-${spacing * 4}px`};
  max-width: ${({ spacing }) => `calc(100% + ${spacing * 8}px)`};
  /* flex-basis: ${({ spacing }) => `calc(100% + ${spacing * 8}px)`}; */
`;

export const Item = styled(Box)`
  flex-grow: ${({ flexGrow }) => flexGrow ?? 0};
  max-width: ${({ maxWidth, margin }) => `calc(${maxWidth} - 2*${margin})`};
  flex-basis: ${({ flexBasis, margin }) => `calc(${flexBasis} - 2*${margin})`};
`;

export const defaultBreakPoints = {
  xs: 0, // xs: [0, 480px]
  sm: 480, // sm: [480px, 768px]
  md: 768, // md: [768px, 1080px]
  lg: 1080, // lg: [1080px, 1440px]
  xl: 1440, // xl: [1440px, 1920px]
  xxl: 1920 // xxl: [1920px and beyond]
};
