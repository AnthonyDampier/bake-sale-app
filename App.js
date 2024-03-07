import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ajax from './src/ajax'

import DealList from './src/components/DealList';

class App extends React.Component {
  state = {
    deals: [{
      title: "25% off",
      name: "Bagel1",
      price: 100,
      uri: "https://via.placeholder.com/150",
    }, {
      title: "50% off",
      name: "Bagel2",
      price: 100,
      uri: "https://via.placeholder.com/150",
    },{
      title: "25% off",
      name: "Bagel1",
      price: 100,
      uri: "https://via.placeholder.com/150",
    }, {
      title: "50% off",
      name: "Bagel2",
      price: 100,
      uri: "https://via.placeholder.com/150",
    },{
      title: "25% off",
      name: "Bagel1",
      price: 100,
      uri: "https://via.placeholder.com/150",
    }, {
      title: "50% off",
      name: "Bagel2",
      price: 100,
      uri: "https://via.placeholder.com/150",
    }],
  };

  render(){
    return (
      <View style={styles.container}>
        <Text style={ styles.header }>BakeSale</Text>
        { 
          this.state.deals.length > 0 ?
          <DealList deals={this.state.deals} />
          :
          <Text>...Loading</Text>
        }
        <StatusBar style="auto" />
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
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default App;