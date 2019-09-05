// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesDynamicFace from '../../../src/client/tiles/my-courses-dynamic/components/my-courses-dynamic-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('My Courses Dynamic | Tile Face / With Icon', module);

addTileFaceStories(stories,<MyCoursesDynamicFace text="My Courses Dynamic" icon={image} />);
