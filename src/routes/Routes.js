import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AuthRoutes from './AuthRoutes';

function Routes() {
  return (
    <SafeAreaView style={styles.root}>
      <AuthRoutes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Routes;
