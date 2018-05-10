/* eslint-disable */
import React from 'react';
import { Alert, StyleSheet, Text, View, Image, TextInput, Button, ScrollView, FlatList, SectionList, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      isLoading: true
    }
    this.onChange = this.onChange.bind(this)
    this.onPressButton = this.onPressButton.bind(this)
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: true,
          dataSource: data.movies
        }, function() {})
      })
      .catch(err => console.error(err))
  }

  onPressButton() {
    Alert.alert('You clicked me!')
  }

  onChange(text) {
    this.setState({ text })
  }
  render() {
    const dog = { uri: 'https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg'}
    const { text, isLoading, dataSource } = this.state
    const { onChange, onPressButton } = this
    if (!isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
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
        <Image style={{height: 100, width: 100}} source={ dog} />
        <Button title="Click me" onPress={ onPressButton } />
        <Text style={styles.name1}>Jeremy</Text>
        <Text style={styles.name2}>Evan</Text>
        <Text style={styles.name3}>Rachel</Text>
        <SectionList
          sections={[
             {title: 'Movies', data: ['Anchorman', 'Old School'] },
            { title: 'TV Shows', data: ['Arrested Development', 'Family Guy', 'SportsCenter', 'PTI'] },
          ]}
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={{ fontWeight: 'bold'}}>{section.title}</Text>}
          keyExtractor={(item, index) => index }
        />
        <FlatList data={[
          {key: 'One'},
          {key: 'Two'},
          {key: 'Three'},
          {key: 'Four'},
          {key: 'Five'},
          {key: 'Six'},
          {key: 'Seven'},
          {key: 'Eight'},
          {key: 'Nine'},
          {key: 'Ten'},
          {key: '1One'},
          {key: '1Two'},
          {key: '1Three'},
          {key: '1Four'},
          {key: '1Five'},
          {key: '1Six'},
          {key: '1Seven'},
          {key: '1Eight'},
          {key: '1Nine'},
          {key: '1Ten'},
          {key: '2One'},
          {key: '2Two'},
          {key: '2Three'},
          {key: '2Four'},
          {key: '2Five'},
          {key: '2Six'},
          {key: '2Seven'},
          {key: '2Eight'},
          {key: '2Nine'},
          {key: '2Ten'}, ]}
          renderItem={({item}) => <Text style={styles.name1}>{item.key}</Text>}
          />
      </View>
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
    fontSize: 50
  },
  name2: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50
  },
  name3: {
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 50,
    textAlign: 'center'
  }
});
