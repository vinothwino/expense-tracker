import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import BrandAuthCard from '@components/molecules/BrandAuthCard';
import SignInForm from '@components/organisms/SignInOrSignUpForm';
import { useTheme } from '@react-navigation/native';
import LinkText from '@components/atoms/LinkText';

const SignInScreen = props => {
  const { navigation } = props;

  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <KeyboardAvoidingView behavior="height" style={styles.root}>
      <ScrollView>
        <View style={styles.root}>
          <BrandAuthCard label="Sign In" />
          <View style={styles.main}>
            <View style={styles.formWrapper}>
              <SignInForm buttonLabel="Sign In" handleSubmitCallback={(msg) => console.log(msg)} />
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
export default SignInScreen;
