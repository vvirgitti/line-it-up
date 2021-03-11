import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './components/Button';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={{color: '#E6C269', fontSize: 40, fontWeight: 'bold', marginTop: 40}}>
            Line It Up
          </Text>
          <Button text="Add players"/>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#375A87',
    alignItems: 'center',
    borderWidth: 1,
  }
})
