import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const LinkText = props => {
  const {label, onPress} = props;
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.registerText} onPress={onPress}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    button: {
      lineHeight: 0,
    },
    registerText: {
      color: theme.colors.primary,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default LinkText;
