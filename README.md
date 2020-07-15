# bluegenes-viz-gallery

This tool is using [storybook](https://storybook.js.org/) to show all our bluegenes visualisation tools in one place for demo purposes without actually needing anybody to run the visualisations locally.

### To add any new bluegenes tool

1. Install the npm package of that bluegenes tool.
2. Add a object containing package name, imURL, imEntity in the `tools.js` file.
3. npm install

**Note:** Do not commit the folders created post npm install command.

### To set up locally for development
1. Clone the repo
2. `cd bluegenes-viz-gallery` and then `npm install` to install dependencies
3. Run `npm run storybook` to start the local server