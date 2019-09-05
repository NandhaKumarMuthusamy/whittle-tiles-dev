// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesImageFace from '../../../src/client/tiles/my-courses-image/components/my-courses-image-face';


const stories = storiesOf('My Courses Image | Tile Face / Just Text', module);

addTileFaceStories(stories,<MyCoursesImageFace text="My Courses Image" />);
