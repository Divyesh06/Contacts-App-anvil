import { StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import { on_anvil_message } from './anvil_message_handler';
import { useRef } from 'react';

export default function App() {
  const webviewRef = useRef(null);
  return (
    <WebView
      ref={webviewRef}
      source={{ uri: 'https://anvil-native-contacts.anvil.app' }} // Replace with your desired URL
      onMessage={(event) => on_anvil_message(webviewRef, JSON.parse(event.nativeEvent.data))}
      allowFileAccess={true}
      allowUniversalAccessFromFileURLs={true}
      mixedContentMode="always"
    />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webview: {
    backgroundColor: '#15f4ee',
    flex: 1,
  },
});
