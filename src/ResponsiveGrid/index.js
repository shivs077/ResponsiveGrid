import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  forwardRef
} from "react";
import _ from "lodash";
import PropTypes from "prop-types";

import useTargetDimensions from "./useTargetDimensions";
import { defaultBreakPoints, Container } from "./utils";
import GridItem from "./GridItem";

const GridContext = createContext(null);

// breakpoints: {xs: 0, sm: 480, md: 768, lg: 1080, xl: 1440, xxl: 1920}
const ResponsiveGrid = forwardRef(
  (
    {
      target,
      breakpoints: initialBreakPoints,
      children,
      spacing = 0,
      className,
      ...rest
    },
    ref
  ) => {
    // const parentRef = useRef();
    const { width } = useTargetDimensions(target);

    const [breakpoints, setBreakpoints] = useState({
      ...defaultBreakPoints,
      ...(initialBreakPoints ?? {}) // will overwrite default breakpoints
    });

    // sync breakpoints with provided breakpoints
    useEffect(() => {
      let newBreakpoints = {
        ...defaultBreakPoints,
        ...(initialBreakPoints ?? {})
      };
      if (!_.isEqual(newBreakpoints, breakpoints))
        setBreakpoints(newBreakpoints);
    }, [breakpoints, initialBreakPoints]);

    const calcItemWidth = useCallback(
      (config) => {
        let styles = {
          margin: `${spacing * 4}px` // gap, 8px baseline grid, might make this dynamic
          //might include option to set row and column gaps separaetly
        };
        const viewport = Object.keys(breakpoints)
          .sort((i, j) => breakpoints[j] - breakpoints[i])
          .find((i) => width >= breakpoints[i] && config[i]);
        if (!config[viewport]) return styles;
        if (config[viewport] === true)
          return {
            ...styles,
            basis: 0,
            flexGrow: 1,
            width: "100%"
          };
        return config[viewport] === "auto"
          ? { ...styles, width: "none", basis: "auto", flexGrow: 0 }
          : {
              ...styles,
              // 12 column layout, might make this dynamic
              width: `${(config[viewport] / 12) * 100}%`,
              basis: `${(config[viewport] / 12) * 100}%`,
              flexGrow: 0
            };
      },
      [width, breakpoints, spacing]
    );

    return (
      <GridContext.Provider value={{ width, calcItemWidth }}>
        <Container
          className={className}
          ref={ref}
          wrap
          direction="row"
          spacing={spacing}
          flex
        >
          {children}
        </Container>
      </GridContext.Provider>
    );
  }
);

ResponsiveGrid.displayName = "ResponsiveGrid";

ResponsiveGrid.propTypes = {
  targetBody: PropTypes.bool,
  breakpoints: PropTypes.array,
  spacing: PropTypes.number
};

export { GridItem, GridContext };
export default ResponsiveGrid;
