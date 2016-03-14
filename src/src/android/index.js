'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NativeModules
} from 'react-native';
var styles = require('./stylesheet.js');

class <%= name %> extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      url: null
    };
  }

  componentWillMount() {
    var that = this;
    NativeModules.Share.getSharedText((text :string) => {
      if (text && text.length) {
        that.setState({ url: text });
      }
    })
  }

  render() {
    var url = this.state.url;
    return (
      <View>
        <Text style={styles.h1}><%= name %></Text>
        <Text style={styles.text}>@Change to add your content here!</Text>
        <Text style={styles.text}>Current URL: {url}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('<%= name %>', () => <%= name %>);
