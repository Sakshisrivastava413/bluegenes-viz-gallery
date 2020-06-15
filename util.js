export const renderTool = (name, params) => {
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
        window[name].main(elem, ...params);
    };
    return elem;
}