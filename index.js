import clevermapsJsSdk from 'https://cdn.jsdelivr.net/npm/clevermaps-js-sdk@2.4.1/+esm';

function render({ model, el }) {

    let view_url = model.get('view_url');
    let options = model.get('options');

    let div = document.createElement('div');
    div.setAttribute("id", "frameDiv");
    el.appendChild(div);

    const sdk = clevermapsJsSdk();

    const iframe = sdk.createIframe(view_url, options);

    sdk.renderIframe('frameDiv', iframe);
}

export default { render };