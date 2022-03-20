import React from "react";
import {Spacing} from "@ds.e/foundation"

interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FunctionComponent<ColorProps> = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
}) => {
    const className = `dse-width-${width} dse-height-${height}`;
  return <div className={className} style={{ background: hexCode }}></div>;
};

export default Color;
