export default {
  title: 'Demo',
};

import { default as config } from '../config/interaction-network';

export const InteractionNetwork = () => {
  const elem = document.createElement('div');
  const script = document.createElement('script');
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'http://localhost:6006/interaction-network/style.css';
  script.src = 'http://localhost:6006/interaction-network/bundle.js';
  elem.classList.add('bluegenesInteractionsNetwork');
  document.head.append(css);
  document.body.append(script);

  script.onload = () => {

    const imURL = {
      root: 'https://www.humanmine.org/humanmine',
    };
    const dataToInitialiseToolWith = {
      class: 'Protein',
      format: 'id',
      value: "128, 5468"
    };
    const toolState = {};
    const navigate = function (type, data, mine) {
      var someMine = mine ? "on ".concat(mine) : null;
      var msg = ["Navigating to", type, someMine, "with data:"]
        .filter(function (e) { return e })
        .join(" ");
      console.log(msg, data);
    };

    console.log(window.bluegenesInteractionsNetwork);
    window.bluegenesInteractionsNetwork.main(
      elem,
      imURL,
      dataToInitialiseToolWith,
      toolState,
      config,
      navigate
    );
  };

  return elem;
};