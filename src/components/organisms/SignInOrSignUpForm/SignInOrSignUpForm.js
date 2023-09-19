import {View, StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import RoundedInput from '../../atoms/RoundedInput';
import RoundedButton from '../../atoms/RoundedButton';
import {Formik} from 'formik';
import {authValidationSchema} from 'src/validationSchema/auth';

const SignInOrSignUpForm = props => {
  const {buttonLabel, handleSubmitCallback} = props;

  const passwordFieldRef = useRef();

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={authValidationSchema}
      onSubmit={handleSubmitCallback}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <View>
          <View style={styles.formGroup}>
            <RoundedInput
              iconName="mail"
              inputProps={{
                inputMode: 'email',
                placeholder: 'Email',
                autoComplete: 'off',
                onChangeText: handleChange('email'),
                onBlur: handleBlur('email'),
                value: values.email,
                blurOnSubmit: false,
                onSubmitEditing: () => passwordFieldRef.current.focus(),
              }}
              error={errors.email}
            />
            <RoundedInput
              iconName="key"
              inputProps={{
                ref: passwordFieldRef,
                secureTextEntry: true,
                placeholder: 'Password',
                autoComplete: 'off',
                onChangeText: handleChange('password'),
                onBlur: handleBlur('password'),
                value: values.password,
              }}
              error={errors.password}
            />
          </View>
          <RoundedButton label={buttonLabel} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formGroup: {
    gap: 15,
    marginBottom: 80,
  },
});
export default SignInOrSignUpForm;
