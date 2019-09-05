// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesStaticFace from '../../../src/client/tiles/my-courses-static/components/my-courses-static-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('My Courses Static | Tile Face / With Icon', module);

addTileFaceStories(stories,<MyCoursesStaticFace text="My Courses Static" icon={image} />);
