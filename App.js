/* eslint-disable */
import React from 'react';
import { Alert, StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onPressButton = this.onPressButton.bind(this)
  }

  onPressButton() {
    Alert.alert('You clicked me!')
  }

  onChange(text) {
    this.setState({ text })
  }
  render() {
    const { text } = this.state
    const { onChange, onPressButton } = this
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text>This is my very simple app of names!</Text>
        <TextInput
          style={{ height: 40}}
          placeholder="Type to add a new name"
          onChangeText={(text) => onChange(text) }
        />
        <Text style={{ padding: 10, fontSize: 30 }}>
          {text.split(' ').map(word => word && '🍕').join(' ')}
        </Text>
        <Button title="Click me" onPress={ onPressButton } />
        <Text style={styles.name1}>Jeremy</Text>
        <Text style={styles.name2}>Evan</Text>
        <Text style={styles.name3}>Carolyn</Text>
        <Text style={styles.name3}>Charles Bea</Text>
      </View>
      </ScrollView>
      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'center',
      //   alignItems: 'stretch'
      // }}>
      //   <View style={{ height: 100, backgroundColor: 'powderblue'}} />
      //   <View style={{ height: 100, backgroundColor: 'skyblue'}} />
      //   <View style={{ height: 100, backgroundColor: 'steelblue'}} />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name1: {
    color: 'green',
    fontSize: 90
  },
  name2: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 90
  },
  name3: {
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 90,
    textAlign: 'center'
  }
});



class Blink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowingText: true
    }
    // setInterval(() => {
    //   this.setState(prevState => {
    //     return { isShowingText: !prevState.isShowingText}
    //   })
    // }, 1000 )
  }


  render() {
    const display = this.state.isShowingText ? this.props.name : ''
    return (
      <Text>{display}!</Text>
    )
  }
}
