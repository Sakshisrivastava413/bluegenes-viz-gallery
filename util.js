export const renderTool = (name, params) => {
    const elem = document.createElement('div');
    const script = document.createElement('script');
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = `http://localhost:6006/${name}/style.css`;
    script.src = `http://localhost:6006/${name}/bundle.js`;
    elem.classList.add(name);
    document.head.append(css);
    document.body.append(script);

    script.onload = () => {
        window[name].main(elem, ...params);
    };
    return elem;
}