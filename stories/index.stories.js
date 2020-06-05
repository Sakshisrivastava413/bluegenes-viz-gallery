export default {
  title: 'Bluegenes',
};

import interactionParams from '../configs/interaction-network';
import pathwayParams from '../configs/pathway-visualizer';
import { renderTool } from '../util';

import imjs from 'imjs';
window.imjs = imjs;

export const InteractionNetwork = () => (
  renderTool('bluegenesInteractionsNetwork', interactionParams)
);

export const PathwayVisualizer = () => (
  renderTool('bluegenesPathwayVisualizer', pathwayParams)
);