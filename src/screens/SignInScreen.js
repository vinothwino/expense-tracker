import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import BrandAuthCard from '@components/atoms/BrandAuthCard';
import SignInForm from '@components/molecules/SignInForm';
import {useTheme} from '@react-navigation/native';
import LinkText from '@components/atoms/LinkText';

const SignInScreen = props => {
  const {navigation} = props;

  console.log(props);

  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <KeyboardAvoidingView behavior="height" style={styles.root}>
      <View style={styles.root}>
        <BrandAuthCard label="Sign In" />
        <View style={styles.main}>
          <View style={styles.formWrapper}>
            <SignInForm buttonLabel="Sign In" />
          </View>
          <View style={styles.linkText}>
            <Text>Don't have a account ? </Text>
            <LinkText
              label="Sign Up"
              onPress={() => navigation.navigate('SIGN_UP')}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    root: {
      flex: 1,
    },
    main: {
      paddingHorizontal: 30,
      flex: 1,
    },
    formWrapper: {
      flex: 1,
      marginTop: 50,
    },
    linkText: {
      textAlign: 'center',
      marginVertical: 30,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
export default SignInScreen;
