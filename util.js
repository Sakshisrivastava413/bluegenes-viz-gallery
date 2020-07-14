export const renderTool = (name, params) => {
	const navigate = function (type, data, mine) {
		var someMine = mine ? 'on '.concat(mine) : null;
		var msg = ['Navigating to', type, someMine, 'with data:']
			.filter(function (e) {
				return e;
			})
			.join(' ');
		console.log(msg, data);
	};
	const baseUrl = window.location.origin;
	const elem = document.createElement('div');
	const script = document.createElement('script');
	const css = document.createElement('link');
	css.rel = 'stylesheet';
	css.href = `${baseUrl}/${name}/style.css`;
	script.src = `${baseUrl}/${name}/bundle.js`;
	elem.classList.add(name);
	document.head.append(css);
	document.body.append(script);

	script.onload = () => {
		window[name].main(elem, navigate, ...params);
	};
	return elem;
};
