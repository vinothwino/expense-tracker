import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

function RoundedInput(props) {
  const {iconName, inputProps, error} = props;
  const theme = useTheme();
  const styles = createStyles(theme);

  const inputPaddingLeft = !!iconName && styles.inputWithIcon;

  return (
    <View>
      {!!iconName && <Ionicons style={styles.icon} name={iconName} size={18} />}
      <TextInput style={[styles.root, inputPaddingLeft]} {...inputProps} />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

RoundedInput.propTypes = {
  iconName: PropTypes.string,
  inputProps: PropTypes.any,
};

const createStyles = theme =>
  StyleSheet.create({
    root: {
      shadowOpacity: 0.5,
      shadowRadius: 3,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      backgroundColor: theme.colors.white,
      elevation: 4,
      borderRadius: 20,
      paddingLeft: 30,
      paddingRight: 20,
      paddingVertical: 10,
    },
    inputWithIcon: {
      paddingLeft: 60,
    },
    icon: {
      position: 'absolute',
      left: 22,
      top: 15,
      zIndex: 1,
    },
    error: {
      marginTop: 8,
      fontSize: 12,
      color: theme.colors.error,
    },
  });
export default RoundedInput;
