// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories, generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesImageFace from '../../../src/client/tiles/my-courses-image/components/my-courses-image-face';

const image = generateImage("My Tile    ","#eeeeee");

const stories = storiesOf('My Courses Image | Tile Face / With Icon', module);

addTileFaceStories(stories,<MyCoursesImageFace text="My Courses Image" icon={image} />);
