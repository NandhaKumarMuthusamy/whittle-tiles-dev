// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';

// import { withKnobs } from '@storybook/addon-knobs';
import { addTileFaceStories } from "@ombiel/cm-tile-sdk/dev";

import ASAPConnectedFace from '../../../src/client/tiles/asap-connected/components/asap-connected-face';


const stories = storiesOf('ASAP Connected | Tile Face / Just Text', module);

addTileFaceStories(stories,<ASAPConnectedFace text="ASAP Connected" />);
