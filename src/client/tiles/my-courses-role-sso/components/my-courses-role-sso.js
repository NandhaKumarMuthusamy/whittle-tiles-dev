import React from "react";
import PropTypes from "prop-types";

import {
  Tile,
  TileBoard,
  TileFace,
  useTileProps,
  useServerAction,
  CACHE_STRATEGY,
} from "@ombiel/cm-tile-sdk";

export default function Payroll() {

  const tileProps = useTileProps();
  const {content: {text,image,icon}} = tileProps;

  const [{ responseBody }] = useServerAction(
    "mycourses-role-sso",
    { cache: CACHE_STRATEGY.NETWORK_FIRST }
  );

  const courses = responseBody || [];

  console.log("My Courses Role SSO", responseBody);

  if (courses.length === 0) {
    return (
      <Tile>
        <TileBoard>
          <TileFace 
            key={`${text}_${image}`} 
            image={image} 
            icon={icon}
            text={text}
            backgroundColor="#FFFFFF"
            borderColor="#FFFFFF"
            onClick={null}
          />
        </TileBoard>
      </Tile>
    );
  }

  return (
    <Tile>
      <TileBoard>
        <TileFace 
          key={`${text}_${image}`} 
          image={image} 
          icon={icon}          
          backgroundColor="#FFFFFF"
          borderColor="#FFFFFF"          
          onClick={null}
        > 
        </TileFace>
      </TileBoard>
    </Tile>
  );
}
