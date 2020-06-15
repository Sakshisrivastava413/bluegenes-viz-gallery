export default [
    {
        root: 'https://www.humanmine.org/humanmine'
    },
    {
        Gene: {
            class: 'Gene',
            format: 'id',
            value: 1205472
        }
    },
    {},
    {
        "accepts": ["id"],
        "classes":
            ["Gene"]
        ,
        "depends": ["AtlasExpression"],
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
            "human": "BlueGenes Expression Box Swarm Visualizer",
            "cljs": "bluegenesExpressionBoxSwarmVisualizer"
        },
        "version": 2
    }
];