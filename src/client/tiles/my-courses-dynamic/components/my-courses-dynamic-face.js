import React from "react";
import PropTypes from "prop-types";

import {
  TileFace,
  // HBlock,
  // VBlock,
  // TextBox,
  // TextLine,
  // ImageBox,
  // Badge,
  // SvgBox,
  // Layer,

} from "@ombiel/cm-tile-sdk";

export default function MyCoursesDynamicFace({text,image,icon}) {

  return (
    <TileFace
      text={text}
      image={image}
      icon={icon}
    />
  );

}

MyCoursesDynamicFace.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string,
};
