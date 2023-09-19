import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BrandAuthCard = props => {
  const theme = useTheme();
  const {label} = props;

  return (
    <View style={styles.brandCardContainer}>
      <LinearGradient style={styles.brandCard} colors={theme.colors.gradient}>
        <Ionicons name="wallet-outline" size={75} color="#fff" />
        <Text style={styles.text}>{label}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  brandCardContainer: {
    height: 250,
    borderBottomStartRadius: 100,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    position: 'absolute',
    bottom: 50,
    right: 30,
    fontSize: 18,
  },
  brandCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BrandAuthCard;
