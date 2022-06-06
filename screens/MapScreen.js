import React, { useState, useEffect } from 'react';
import {Dimensions, Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import {PROVIDER_GOOGLE} from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({latitude:location.coords.latitude,longitude:location.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.03,})
        console.log(location);
    })();
  }, []);

  return (
    <View style={styles.map}>
      <MapView
      initialRegion={location}
      provider = {PROVIDER_GOOGLE}
      style={styles.map}
      showUserLocation
      followUserLocation
      loadingEnabled
      region={
        location
      }
      >
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});