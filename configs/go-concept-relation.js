export default [
    {
        root: 'https://www.flymine.org/flymine',
        root: 'https://www.humanmine.org/humanmine',
    },
    {
        class: 'Protein',
        format: 'ids',
        value: [128, 5468]
    },
    {},
    {
        "accepts": ["ids"],
        "classes":
            ["Gene"]
        ,
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
            "human": "GO terms Concept Viewer",
            "cljs": "BlueGenesGoConceptRelation"
        }
    },
    function (type, data, mine) {
        var someMine = mine ? "on ".concat(mine) : null;
        var msg = ["Navigating to", type, someMine, "with data:"]
            .filter(function (e) { return e })
            .join(" ");
        console.log(msg, data);
    }
];