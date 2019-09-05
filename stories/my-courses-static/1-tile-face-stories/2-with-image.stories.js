// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories,generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesStaticFace from '../../../src/client/tiles/my-courses-static/components/my-courses-static-face';

const image = generateImage("My Tile ","#556666");

const stories = storiesOf('My Courses Static | Tile Face / With Image', module);

addTileFaceStories(stories,<MyCoursesStaticFace image={image} text="My Courses Static" />);
