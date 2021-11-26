import * as React from 'react';
import { StyleSheet,Text, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { BELUGA } from '../constants/Colors';

export default function ExploreTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/ExploreTabScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BELUGA
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
