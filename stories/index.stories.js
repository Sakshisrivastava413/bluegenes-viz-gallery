export default {
  title: 'Bluegenes',
};

import interaction from '../configs/interaction-network';

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
    window.bluegenesInteractionsNetwork.main(
      elem,
      interaction.imURL,
      interaction.dataToInitialiseToolWith,
      interaction.toolState,
      interaction.config,
      interaction.navigate
    );
  };

  return elem;
};