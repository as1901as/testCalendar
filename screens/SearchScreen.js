import React from 'react';
import { WebView } from 'react-native-webview';

function SearchScreen() {
    return (
      <WebView
        source={{uri: "https://console.dialogflow.com/api-client/demo/embedded/35e7405c-e6c5-4191-aa9f-b87175002b08"}}
        style={{marginTop: -110}}
      />
    );
}

export default SearchScreen;