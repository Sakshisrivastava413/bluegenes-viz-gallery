export default [
  {
    root: 'https://www.flymine.org/flymine',
  },
  {
    Gene: {
      class: 'Gene',
      format: 'id',
      value: 1007357
    }
  },
  {},
  {
    "accepts": ["id"],
    "classes":
      ["Gene"]
    ,
    "depends": ["RNASeqResult", "MicroArrayResult"],
    "columnMapping": {
      "Gene": {
        "id": "primaryIdentifier"
      },
      "Protein": {
        "id": "primaryAccession"
      }
    },
    "files": {
      "css": "dist/style.css",
      "js": "dist/bundle.js"
    },
    "toolName": {
      "human": "Bluegenes Tissue Expression Visualizer",
      "cljs": "bluegenesTissueExpressionVisualizer"
    },
    "version": 2
  }
];