import React, {Component} from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class locationScreen extends Component{
  constructor(props) {
  super(props);
  this.state = {
    loading: true,
    region: {
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001
  }
  };
}

render() {
  return (
<MapView
    style={styles.map}
    initialRegion={this.state.region}
    showsUserLocation={true}
    provider = { PROVIDER_GOOGLE }
    onMapReady={this.onMapReady}
    onRegionChangeComplete={this.onRegionChange}>
  <MapView.Marker
    coordinate={{ "latitude": this.state.region.latitude,   
    "longitude": this.state.region.longitude }}
    title={"Your Location"}
    draggable />
</MapView>);
}
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

