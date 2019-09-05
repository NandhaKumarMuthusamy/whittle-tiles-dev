// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MockTileGrid, generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesStatic from "../../../src/client/tiles/my-courses-static/components/my-courses-static";

const stories = storiesOf('My Courses Static | Tile / Single', module);

stories.addDecorator(withKnobs);

const desc = "My Courses Static";
const image = generateImage("My Tile");

stories.add('with 1 x 1 dimensions', () => (
  <MockTileGrid 
    extraTiles="5"
    minCols="2"
    withKnobs="MyCoursesStatic"
    component={MyCoursesStatic}
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
    withKnobs="MyCoursesStatic"
    component={MyCoursesStatic}
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
    withKnobs="MyCoursesStatic"
    component={MyCoursesStatic}
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
    withKnobs="MyCoursesStatic"
    component={MyCoursesStatic}
    enableMocks
    menuOption={{
      desc,
      image,
      tileHeight: 2,
      tileWidth: 2,
    }}
  />
));
