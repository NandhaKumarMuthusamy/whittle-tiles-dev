// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MockTileGrid, generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesDynamic from "../../../src/client/tiles/my-courses-dynamic/components/my-courses-dynamic";

const stories = storiesOf('My Courses Dynamic | Tile / Single', module);

stories.addDecorator(withKnobs);

const desc = "My Courses Dynamic";
const image = generateImage("My Tile");

stories.add('with 1 x 1 dimensions', () => (
  <MockTileGrid 
    extraTiles="5"
    minCols="2"
    withKnobs="MyCoursesDynamic"
    component={MyCoursesDynamic}
    enableMocks
    menuOption={{
      desc,
      image,
    }}
  />
));

stories.add('with 2 x 1 dimensions', () => (
  <MockTileGrid 
    extraTiles="4"
    minCols="2"
    withKnobs="MyCoursesDynamic"
    component={MyCoursesDynamic}
    enableMocks
    menuOption={{
      desc,
      image,
      tileWidth: 2,
    }}
  />
));
stories.add('with 1 x 2 dimensions', () => (
  <MockTileGrid 
    extraTiles="4"
    minCols="2"
    withKnobs="MyCoursesDynamic"
    component={MyCoursesDynamic}
    enableMocks
    menuOption={{
      desc,
      image,
      tileHeight: 2,
    }}
  />
));
stories.add('with 2 x 2 dimensions', () => (
  <MockTileGrid 
    extraTiles="4"
    minCols="2"
    withKnobs="MyCoursesDynamic"
    component={MyCoursesDynamic}
    enableMocks
    menuOption={{
      desc,
      image,
      tileHeight: 2,
      tileWidth: 2,
    }}
  />
));
