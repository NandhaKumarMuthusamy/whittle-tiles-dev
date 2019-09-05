import { configure,addParameters } from '@storybook/react';

addParameters({
  options: {
    panelPosition: 'right',
  }
});

window.addEventListener("load", function(event) {

  document.documentElement.style.height = "100%";
  document.body.style.height = "100%";
  document.body.style.margin = 0;
  document.getElementById("root").style.height = "100%";

  const req = require.context('../stories', true, /\.stories\.js$/);

  function loadStories() {
    req.keys().forEach(filename => req(filename));
  }
  configure(loadStories, module);
});

