import React from "react";

import {
  Tile,
  TileBoard,
  TileFace,
  useTileProps,
  useServerAction,
  CACHE_STRATEGY,
} from "@ombiel/cm-tile-sdk";

export default function ASAPConnected() {
  
  const tileProps = useTileProps();
  const {content: {text,image,icon}} = tileProps;
  
  const [{ responseBody }] = useServerAction(
    "asapconnected",
    { cache: CACHE_STRATEGY.NETWORK_FIRST },
    { update: 1 },
  );

  console.log("ASAP_Response", responseBody);

  return (
    <Tile>
      <TileBoard>
        <TileFace 
          key={`${text}_${image}`} 
          text={text} 
          image={image} 
          icon={icon}                   
          backgroundColor="#FFFFFF"
          borderColor="#FFFFFF"          
          onClick="https://secure.magnushealthportal.com/front_desk.jsf"
        />
      </TileBoard>
    </Tile>
  );
}
