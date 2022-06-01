import React from 'react';
import {StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';

function SearchScreen() {
    return (
      <WebView
        source={{uri: 'https://www.naver.com'}}
        style={{marginTop: 20}}
      />
    );
}

const styles = StyleSheet.create({
  block: {},
});

export default SearchScreen;