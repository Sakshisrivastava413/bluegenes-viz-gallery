export default {
  title: 'Bluegenes',
};

import interactionParams from '../configs/interaction-network';
import pathwayParams from '../configs/pathway-visualizer';
import { renderTool } from '../util';

export const InteractionNetwork = () => (
  renderTool('bluegenesInteractionsNetwork', interactionParams)
);

export const PathwayVisualizer = () => (
  renderTool('bluegenesPathwayVisualizer', pathwayParams)
);