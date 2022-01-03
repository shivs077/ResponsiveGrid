import React, { useContext, forwardRef } from "react";
import PropTypes from "prop-types";

import { GridContext } from "./index";
import { Item } from "./utils";

const GridItem = forwardRef(
  ({ children, className, xs, sm, md, lg, xl, xxl, ...rest }, ref) => {
    const { calcItemWidth } = useContext(GridContext);
    let { width, basis, flexGrow, margin } = calcItemWidth({
      xs,
      sm,
      md,
      lg,
      xl,
      ...rest
    });
    return (
      <Item
        ref={ref}
        className={className}
        maxWidth={width}
        flexBasis={basis}
        flexGrow={flexGrow}
        margin={margin}
      >
        {children}
      </Item>
    );
  }
);

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.oneOfType([
    PropTypes.oneOf(["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.oneOf(["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  md: PropTypes.oneOfType([
    PropTypes.oneOf(["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.oneOf(["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  xl: PropTypes.oneOfType([
    PropTypes.oneOf(["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ]),
  xxl: PropTypes.oneOfType([
    PropTypes.oneOf(["auto", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    PropTypes.bool
  ])
};

GridItem.displayName = "GridItem";

export default GridItem;
