export default {
  title: 'Bluegenes',
};

import interactionParams from '../configs/interaction-network';
import pathwayParams from '../configs/pathway-visualizer';
import goConceptParams from '../configs/go-concept-relation';
import diseaseExpressionArrayexpressParams from '../configs/disease-expression-arrayexpress-visualizer';
import expressionBoxSwarmParams from '../configs/expression-box-swarm-visualizer';
import goTermParams from '../configs/go-term-visualizer';
import proteinAtlasTissueExpressionParams from '../configs/protein-atlas-tissue-expression-visualizer';
// import proteinParams from '../configs/protein-visualizer';
import tissueExpressionArrayexpressParams from '../configs/tissue-expression-arrayexpress-visualizer';
import tissueExpressionParams from '../configs/tissue-expression-visualizer';
import msaViewerParams from '../configs/msa-viewer';
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
  renderTool('BlueGenesDiseaseExpressionArrayexpressVisualizer', diseaseExpressionArrayexpressParams)
);

export const ExpressionBoxSwarmVisualizer = () => (
  renderTool('bluegenesExpressionBoxSwarmVisualizer', expressionBoxSwarmParams)
);

export const GOTermVisualizer = () => (
  renderTool('bluegenes_GO_term_visualizer', goTermParams)
);

export const ProteinAtlasTissueExpressionVisualizer = () => (
  renderTool('bluegenesProteinAtlasTissueExpressionVisualizer', proteinAtlasTissueExpressionParams)
);

// export const ProteinVisualizer = () => (
//   renderTool('bluegenesProteinVisualizer', proteinParams)
// );

export const TissueExpressionArrayexpressVisualizer = () => (
  renderTool('bluegenesTissueExpressionArrayexpressVisualizer', tissueExpressionArrayexpressParams)
);

export const TissueExpressionVisualizer = () => (
  renderTool('bluegenesTissueExpressionVisualizer', tissueExpressionParams)
);

export const MSAViewer = () => (
  renderTool('bluegenesMSAViewer', msaViewerParams)
);