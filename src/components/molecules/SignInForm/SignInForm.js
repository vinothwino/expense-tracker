import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import RoundedInput from '../../atoms/RoundedInput';
import RoundedButton from '../../atoms/RoundedButton';

const SignUpForm = props => {
  const {buttonLabel} = props;
  return (
    <View>
      <View style={styles.formGroup}>
        <RoundedInput
          iconName="mail"
          inputProps={{
            inputMode: 'email',
            placeholder: 'Email',
            autoComplete: 'off',
          }}
        />
        <RoundedInput
          iconName="key"
          inputProps={{
            secureTextEntry: true,
            placeholder: 'Password',
            autoComplete: 'off',
          }}
        />
      </View>
      <RoundedButton label={buttonLabel} />
    </View>
  );
};

const styles = StyleSheet.create({
  formGroup: {
    gap: 30,
    marginBottom: 80,
  },
});
export default SignUpForm;
