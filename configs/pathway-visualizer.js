export default {
  config: {
    "accepts": ["id"],
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
      "human": "Bluegenes Pathway Visualizer",
      "cljs": "bluegenesPathwayVisualizer"
    }
  },
  imURL: {
    root: 'https://www.humanmine.org/humanmine',
  },
  dataToInitialiseToolWith: {
    class: 'Protein',
    format: 'id',
    value: "128, 5468"
  },
  toolState: {},
  navigate: function (type, data, mine) {
    var someMine = mine ? "on ".concat(mine) : null;
    var msg = ["Navigating to", type, someMine, "with data:"]
      .filter(function (e) { return e })
      .join(" ");
    console.log(msg, data);
  }
}