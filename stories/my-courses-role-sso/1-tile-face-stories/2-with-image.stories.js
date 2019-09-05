// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories,generateImage } from "@ombiel/cm-tile-sdk/dev";

import MyCoursesRoleSsoFace from '../../../src/client/tiles/my-courses-role-sso/components/my-courses-role-sso-face';

const image = generateImage("My Tile ","#556666");

const stories = storiesOf('My Courses Role SSO | Tile Face / With Image', module);

addTileFaceStories(stories,<MyCoursesRoleSsoFace image={image} text="My Courses Role SSO" />);
