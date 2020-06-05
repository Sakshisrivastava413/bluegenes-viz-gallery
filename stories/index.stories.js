export default {
  title: 'Bluegenes',
};

import interactionParams from '../configs/interaction-network';
import pathwayParams from '../configs/pathway-visualizer';
import goConceptParams from '../configs/go-concept-relation';
import DiseaseExpressionArrayexpressParams from '../configs/disease-expression-arrayexpress-visualizer';
import { renderTool } from '../util';

import imjs from 'imjs';
window.imjs = imjs;

export const InteractionNetwork = () => (
  renderTool('bluegenesInteractionsNetwork', interactionParams)
);

export const PathwayVisualizer = () => (
  renderTool('bluegenesPathwayVisualizer', pathwayParams)
);

export const GoConceptRelation = () => (
  renderTool('BlueGenesGoConceptRelation', goConceptParams)
);

export const DiseaseExpressionArrayexpressVisualizer = () => (
  renderTool('BlueGenesDiseaseExpressionArrayexpressVisualizer', DiseaseExpressionArrayexpressParams)
);