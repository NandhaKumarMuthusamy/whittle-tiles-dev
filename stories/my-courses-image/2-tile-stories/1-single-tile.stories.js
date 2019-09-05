// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MockTileGrid, generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesImage from "../../../src/client/tiles/my-courses-image/components/my-courses-image";

const stories = storiesOf('My Courses Image | Tile / Single', module);

stories.addDecorator(withKnobs);

const desc = "My Courses Image";
const image = generateImage("My Tile");

stories.add('with 1 x 1 dimensions', () => (
  <MockTileGrid 
    extraTiles="5"
    minCols="2"
    withKnobs="MyCoursesImage"
    component={MyCoursesImage}
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
    withKnobs="MyCoursesImage"
    component={MyCoursesImage}
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
    withKnobs="MyCoursesImage"
    component={MyCoursesImage}
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
    withKnobs="MyCoursesImage"
    component={MyCoursesImage}
    enableMocks
    menuOption={{
      desc,
      image,
      tileHeight: 2,
      tileWidth: 2,
    }}
  />
));
