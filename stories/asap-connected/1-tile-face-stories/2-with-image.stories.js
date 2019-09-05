// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories,generateImage } from "@ombiel/cm-tile-sdk/dev";

import ASAPConnectedFace from '../../../src/client/tiles/asap-connected/components/asap-connected-face';

const image = generateImage("My Tile ","#556666");

const stories = storiesOf('ASAP Connected | Tile Face / With Image', module);

addTileFaceStories(stories,<ASAPConnectedFace image={image} text="ASAP Connected" />);
