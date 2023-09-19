import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';

const RoundedButton = props => {
  const {label, onPress} = props;

  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        onPress={onPress}
        style={styles.button}
        android_ripple={{color: '#9358c7'}}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    overflow: 'hidden',
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#7514c9',
    padding: 16,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default RoundedButton;
