import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import BrandAuthCard from '../components/molecules/BrandAuthCard';
import SignInForm from '../components/organisms/SignInOrSignUpForm';
import {useTheme} from '@react-navigation/native';
import LinkText from '../components/atoms/LinkText';

const SignUpScreen = props => {
  const {navigation} = props;
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <KeyboardAvoidingView behavior="height" style={styles.root}>
      <ScrollView>
        <View style={styles.root}>
          <BrandAuthCard label="Sign Up" />
          <View style={styles.main}>
            <View style={styles.formWrapper}>
              <SignInForm buttonLabel="Sign Up" />
            </View>
            <View style={styles.linkText}>
              <Text>Have a account ? </Text>
              <LinkText label="Sign In" onPress={() => navigation.goBack()} />
            </View>
          </View>
        </View>
      </ScrollView>
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
export default SignUpScreen;
