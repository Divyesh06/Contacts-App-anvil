const anvil_app_callables = require('./anvil_app_callables');


async function on_anvil_message(webview, data) {
    function_call = data.function_call;
    args = data.args;
    call_id = data.call_id;
    console.log('on_anvil_message', function_call, args, call_id);
    const return_value = await anvil_app_callables[function_call](...args);
    data = {is_return: true, return_value: return_value, call_id: call_id};
    send_message_anvil(webview, data);
}

async function send_message_anvil(webview, data) {
    webview.current.injectJavaScript(`window.on_react_message(${JSON.stringify(data)})`);
  }

export { on_anvil_message }