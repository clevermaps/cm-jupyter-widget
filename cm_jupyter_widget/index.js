import clevermapsJsSdk from 'https://cdn.jsdelivr.net/npm/clevermaps-js-sdk@2.5.0/+esm';

function render({ model, el }) {
    let view_url = model.get('view_url');
    let options_string = model.get('options');
    let options = JSON.parse(options_string);
    console.log(options_string, options);

    let div = document.createElement('div');
    div.setAttribute("id", "frameDiv");
    el.appendChild(div);

    const sdk = clevermapsJsSdk();
    console.log(sdk)

    const iframe = sdk.createIframe(view_url, options);
    console.log(iframe, div)

    sdk.renderIframe(div, iframe);

    model.on("change:command", () => {
        iframe.message.toggleFitAll();
    });
}

export default { render };