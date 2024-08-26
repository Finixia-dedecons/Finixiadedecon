import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

import {WebView} from 'react-native-webview';

export default function HomeScreen() {
  return (
    //<View style={styles.container}><Text> Hello</Text></View>
   <WebView style={styles.container}
   source={{uri:'https://sostap.finixia.in/'}}/>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  }
})

