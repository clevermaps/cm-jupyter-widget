import clevermapsJsSdk from 'https://cdn.jsdelivr.net/npm/clevermaps-js-sdk@2.5.0/+esm';

function render({ model, el }) {

    let view_url = model.get('view_url');
    let options = model.get('options');

    let div = document.createElement('div');
    div.setAttribute("id", "frameDiv");
    el.appendChild(div);

    const sdk = clevermapsJsSdk();
    console.log(sdk)

    const iframe = sdk.createIframe(view_url, options);
    console.log(iframe)

    sdk.renderIframe('frameDiv', iframe);
}

export default { render };