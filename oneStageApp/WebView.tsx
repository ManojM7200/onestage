import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export const MyWebComponent = () => {
  return <WebView source={{ uri: 'https://manojm7200.github.io/onestage-webview' }} style={{ flex: 1 }} />;
}