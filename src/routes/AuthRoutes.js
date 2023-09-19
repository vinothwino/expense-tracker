import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SIGN_IN"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SIGN_UP"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
