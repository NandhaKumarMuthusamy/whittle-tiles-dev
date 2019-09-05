// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesStaticFace from '../../../src/client/tiles/my-courses-static/components/my-courses-static-face';


const stories = storiesOf('My Courses Static | Tile Face / Just Text', module);

addTileFaceStories(stories,<MyCoursesStaticFace text="My Courses Static" />);
