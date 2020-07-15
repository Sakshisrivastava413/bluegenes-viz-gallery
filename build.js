const fs = require('fs');
const fse = require('fs-extra');
const tools = require('./tools');

const storybookSetup = `
  export default {
    title: 'Bluegenes',
  };
  
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  window.React = React;
  window.ReactDOM = ReactDOM;

  import imjs from 'imjs';
  window.imjs = imjs;
  import { renderTool } from '../util';
  `;
  
fs.mkdirSync('stories', { recursive: true });
fs.mkdirSync('configs', { recursive: true });

fs.writeFileSync(`stories/index.stories.js`, storybookSetup);

tools.map((tool) => {
	const config = JSON.parse(fs.readFileSync(`node_modules/${tool.name}/config.json`));
	const toolName = config.toolName.cljs;
	fs.writeFileSync(`configs/${toolName}.json`, JSON.stringify(config));

	const distSource = `node_modules/${tool.name}/dist`;
	const distDestination = `public/${toolName}`;
	if (!fs.existsSync(distDestination)) {
		fs.mkdirSync(distDestination, { recursive: true });
	}

	fse.copy(distSource, distDestination, function (err) {
		if (err) console.error(err);
		else console.log('success!', distDestination);
	});

	const title = toolName.substr(9, toolName.length);

	const text = `
  import ${toolName}Params from '../configs/${toolName}.json';
  export const ${title} = () => (
    renderTool('${toolName}', ${toolName}Params, ${JSON.stringify(tool.imURL)}, ${JSON.stringify(tool.dataToInitialiseToolWith)})
  );
  `;

	fs.appendFileSync(`stories/index.stories.js`, text);
});
