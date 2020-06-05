export default [
    {
        root: 'https://www.humanmine.org/humanmine',
    },
    {
        class: 'Protein',
        format: 'id',
        value: 1196911
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
            "human": "BlueGenes Tissue Expression Arrayexpress Visualizer",
            "cljs": "bluegenesTissueExpressionArrayexpressVisualizer"
        }
    }
];