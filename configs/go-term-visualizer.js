export default [
    {
        root: 'https://www.flymine.org/flymine'
    },
    {
        "class": "Gene",
        "format": "list",
        "value": "PL_obesityMonogen_ORahilly09",
        "value": "PL FlyTF_REDfly_TFs",
    },
    {},
    {
        "accepts": ["list"],
        "classes": ["Gene"],
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
            "human": "BlueGenes GO-term Visualizer",
            "cljs": "bluegenesGoTermVisualizer"
        }
    }

];